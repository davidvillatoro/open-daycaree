import type { LoginScreenProps } from "@/app/_data/login";

type LoginFormProps = {
  screen: LoginScreenProps;
};

export function LoginForm({ screen }: LoginFormProps) {
  return (
    <div className="flex items-center justify-center px-5 py-10 md:px-10">
      <div className="w-full max-w-[392px]">
        <h2 className="mb-[6px] font-display text-[30px] font-semibold text-[#3F362E]">
          {screen.title}
        </h2>
        <p className="mb-[28px] text-[15px] text-[#94887B]">{screen.subtitle}</p>

        <div className="mb-[8px] text-[12px] font-bold tracking-[0.7px] text-[#94887B]">
          {screen.emailLabel}
        </div>
        <input
          type="email"
          className="mb-[18px] w-full rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white px-[16px] py-[14px] text-[15px] text-[#3F362E] outline-none placeholder:text-[#B6A99B]"
        />

        <div className="mb-[8px] text-[12px] font-bold tracking-[0.7px] text-[#94887B]">
          {screen.passwordLabel}
        </div>
        <input
          type="password"
          className="mb-[10px] w-full rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white px-[16px] py-[14px] text-[15px] text-[#3F362E] outline-none placeholder:text-[#B6A99B]"
        />

        <div className="mb-[20px] text-right">
          <span className="cursor-pointer font-bold text-[#C5503A] text-[13.5px]">
            {screen.forgotPasswordLabel}
          </span>
        </div>

        <button
          type="button"
          className="block w-full rounded-[15px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] py-[15px] text-center text-[16px] font-extrabold text-white shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)]"
        >
          {screen.submitLabel}
        </button>

        <p className="mt-[24px] text-center text-[14.5px] text-[#94887B]">
          <a href={screen.inviteCtaHref} className="font-bold text-[#C5503A]">
            {screen.inviteCtaLabel}
          </a>
        </p>
      </div>
    </div>
  );
}
