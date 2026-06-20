// components/common/Button.tsx

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  loading?: boolean;
}

export default function Button({
  children,
  type = "button",
  loading,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full rounded-lg bg-primary-700 h-[41px] text-[14px] font-medium flex justify-center items-center text-white"
    >
      {loading ? "Loading..." : children}
    </button>
  );
}