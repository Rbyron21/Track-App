
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Women", target: 30, current: 25 },
  { name: "Minorities", target: 40, current: 38 },
  { name: "Veterans", target: 10, current: 8 }
];

export default function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Construction DEI Tracker</h1>
      <p className="mb-6 text-gray-600">Tracking project diversity goals in real-time</p>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold mb-2">DEI Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="target" fill="#8884d8" name="Target %" />
            <Bar dataKey="current" fill="#82ca9d" name="Current %" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
