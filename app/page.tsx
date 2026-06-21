"use client";
import AppDescription from "@/components/appDescription";
import LoginForm from "@/components/auth/loginForm";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="w-1/2 h-full px-[72px]">
        <LoginForm />
      </div>
      <div className="w-1/2 h-full">
        <AppDescription />
      </div>
    </div>
  );
}
