import React, { useState } from "react";
import { Input, Modal } from "antd";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import type { Invoice } from "./TodoList";

type Props = {
  onAdd: (invoice: Invoice) => void;
};

export default function AddInvoice(props: Props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Chưa thanh toán");
  const [error, setError] = useState("");

  let handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  let handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  let handleSelectStatus = (value: string) => {
    setStatus(value);
  };

  let handleSubmit = () => {
    if (!name || !amount) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    setError("");
    const newInvoice: Invoice = {
      id: Math.floor(Math.random() * 100),
      name,
      amount: Number(amount),
      status,
    };
    props.onAdd(newInvoice);
    setName("");
    setAmount("");
    setStatus("Chưa thanh toán");
    Modal.success({ content: "Thêm hoá đơn thành công" });
  };

  return (
    <div style={{ backgroundColor: "white", margin: "20px", padding: "15px" }}>
      <h5>+ Thêm hoá đơn mới</h5>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Input
          placeholder="Tên chủ hộ"
          value={name}
          onChange={handleChangeName}
          style={{ border: "0.5px solid black", width: "250px" }}
        />
        <Input
          placeholder="Số tiền"
          value={amount}
          onChange={handleChangeAmount}
          style={{ border: "0.5px solid black", width: "250px" }}
        />
        <Dropdown>
          <Dropdown.Toggle
            variant="white"
            id="dropdown-basic"
            style={{ border: "0.5px solid black" }}
          >
            {status}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleSelectStatus("Chưa thanh toán")}>
              Chưa thanh toán
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelectStatus("Đã thanh toán")}>
              Đã thanh toán
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="primary" onClick={handleSubmit}>
          Thêm
        </Button>
      </div>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  )
}
