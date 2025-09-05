import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddInvoice from "./AddInvoice";
import Tables from "./Tables";
import Footer from "./Footer";

export type Invoice = {
  id: number;
  name: string;
  amount: number;
  status: string;
};

export default function TodoList() {
  const [invoices, setInvoices] = useState<Invoice[]>(() => {
    const localData = localStorage.getItem("invoices");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  let handleAddInvoice = (invoice: Invoice) => {
    setInvoices([...invoices, invoice]);
  };

  let handleToggleStatus = (id: number) => {
    const updated = invoices.map((item) =>
      item.id === id
        ? { ...item, status: item.status === "Chưa thanh toán" ? "Đã thanh toán" : "Chưa thanh toán" }
        : item
    );
    setInvoices(updated);
  };

  let handleDelete = (id: number) => {
    const updated = invoices.filter((item) => item.id !== id);
    setInvoices(updated);
  };

  return (
    <div>
      <Header />
      <AddInvoice onAdd={handleAddInvoice} />
      <Tables data={invoices} onToggleStatus={handleToggleStatus} onDelete={handleDelete} />
      <Footer />
    </div>
  )
}