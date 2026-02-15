export default function SubFooter() {
  return (
    <div className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8 py-4 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-center md:text-left">
          © Panchamrut Chemicals. All Rights Reserved{" "}
          <a
            className="hover:text-[#15803d] transition-colors"
            href="#"
          >
            (Terms of Use)
          </a>
        </p>
        <p className="text-center md:text-right">
          Developed and Managed by The Web Presence{" "}
          <a
            className="hover:text-[#15803d] transition-colors"
            href="mailto:workwithdarshannn@gmail.com"
          >
            workwithdarshannn@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
