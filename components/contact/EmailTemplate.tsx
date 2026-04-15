interface EmailTemplateProps {
  fullName: string;
  email: string;
  discussion: string;
}

export function EmailTemplate({
  fullName,
  email,
  discussion,
}: EmailTemplateProps) {
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="mx-auto max-w-[640px] bg-[#0A0A0A] rounded-[24px] border border-[#1F1F1F] p-[28px] font-sans text-white">
      <p className="m-0 mb-2 text-[13px] tracking-[0.08em] uppercase text-[#F87171] font-bold">
        New Contact Request
      </p>
      <h1 className="m-0 mb-6 text-[30px] leading-[1.2] font-bold">
        Reach Out Let&apos;s <span className="text-[#EF4444]">Collaborate</span>
      </h1>

      <div className="mb-[14px] rounded-2xl bg-[#111111] p-4">
        <p className="m-0 mb-[6px] text-[#F87171] text-xs uppercase tracking-[0.06em]">
          Full Name
        </p>
        <p className="m-0 text-base font-semibold">{fullName}</p>
      </div>

      <div className="mb-[14px] rounded-2xl bg-[#111111] p-4">
        <p className="m-0 mb-[6px] text-[#F87171] text-xs uppercase tracking-[0.06em]">
          Email
        </p>
        <p className="m-0 text-base font-semibold">{email}</p>
      </div>

      <div className="mb-[18px] rounded-2xl bg-[#111111] p-4">
        <p className="m-0 mb-[6px] text-[#F87171] text-xs uppercase tracking-[0.06em]">
          Discussion
        </p>
        <p className="m-0 text-base whitespace-pre-wrap leading-[1.6] text-[#E5E5E5]">
          {discussion}
        </p>
      </div>

      <p className="m-0 text-xs text-[#A3A3A3]">Submitted at {submittedAt}</p>
      <div className="mt-[14px] h-[2px] w-[120px] bg-gradient-to-r from-[#EF4444] to-transparent" />
      <p className="m-0 mt-[14px] text-xs text-[#737373]">
        Message generated from devstackedmagazine.com contact form.
      </p>
    </div>
  );
}
