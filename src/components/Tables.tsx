import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import type { Invoice } from "./TodoList";

type Props = {
  data: Invoice[];
  onToggleStatus: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function Tables(props: Props) {
  return (
    <div style={{ margin: "20px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tên chủ hộ</th>
            <th>Số tiền</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length === 0 ? (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                Chưa có hóa đơn
              </td>
            </tr>
          ) : (
            props.data.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.name}</td>
                <td>{invoice.amount} VNĐ</td>
                <td
                  style={{
                    color: invoice.status === "Đã thanh toán" ? "green" : "red",
                  }}
                >
                  {invoice.status}
                </td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => props.onToggleStatus(invoice.id)}
                    style={{ marginRight: "10px" }}
                  >
                    Đổi trạng thái
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => props.onDelete(invoice.id)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  )
}