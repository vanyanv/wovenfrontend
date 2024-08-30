import React from 'react';

type User = {
  password: string;
  alert?: boolean;
  alerts?: string[];
};

type DashboardProps = {
  user: User;
};

export default function Dasboard({ user }: DashboardProps) {
  console.log(user);
  return <div>Dashboard</div>;
}
