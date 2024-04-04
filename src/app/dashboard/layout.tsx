import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-5 w-screen">
        <div className="w-3/12 bg-soft1 p-[20px]">
          <Sidebar />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
