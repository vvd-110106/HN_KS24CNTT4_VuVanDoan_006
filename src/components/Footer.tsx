import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "flex-end",
        marginRight: "20px",
        marginBottom: "20px",
      }}
    >
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
      <Dropdown>
        <Dropdown.Toggle
          variant="white"
          id="dropdown-basic"
          style={{ border: "0.5px solid black" }}
        >
          1 bản ghi / trang
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>3 bản ghi / trang</Dropdown.Item>
          <Dropdown.Item>5 bản ghi / trang</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}