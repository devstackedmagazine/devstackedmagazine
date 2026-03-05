
interface EmailTemplateProps {
  fullName: string;
  email: string;
  discussion: string;
}

export function EmailTemplate({ fullName, email, discussion }: EmailTemplateProps) {
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "640px",
        backgroundColor: "#0A0A0A",
        borderRadius: "24px",
        border: "1px solid #1F1F1F",
        padding: "28px",
        fontFamily: "Helvetica, Arial, sans-serif",
        color: "#FFFFFF",
      }}
    >
      <p
        style={{
          margin: "0 0 8px 0",
          fontSize: "13px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#F87171",
          fontWeight: 700,
        }}
      >
        New Contact Request
      </p>
      <h1
        style={{
          margin: "0 0 24px 0",
          fontSize: "30px",
          lineHeight: "1.2",
          fontWeight: 700,
        }}
      >
        Reach Out Let&apos;s <span style={{ color: "#EF4444" }}>Collaborate</span>
      </h1>

      <div style={{ marginBottom: "14px", borderRadius: "16px", backgroundColor: "#111111", padding: "16px" }}>
        <p style={{ margin: "0 0 6px 0", color: "#F87171", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Full Name
        </p>
        <p style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>{fullName}</p>
      </div>

      <div style={{ marginBottom: "14px", borderRadius: "16px", backgroundColor: "#111111", padding: "16px" }}>
        <p style={{ margin: "0 0 6px 0", color: "#F87171", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Email
        </p>
        <p style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>{email}</p>
      </div>

      <div style={{ marginBottom: "18px", borderRadius: "16px", backgroundColor: "#111111", padding: "16px" }}>
        <p style={{ margin: "0 0 6px 0", color: "#F87171", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Discussion
        </p>
        <p style={{ margin: 0, fontSize: "16px", whiteSpace: "pre-wrap", lineHeight: "1.6", color: "#E5E5E5" }}>
          {discussion}
        </p>
      </div>

      <p style={{ margin: 0, fontSize: "12px", color: "#A3A3A3" }}>
        Submitted at {submittedAt}
      </p>
      <div style={{ marginTop: "14px", height: "2px", width: "120px", background: "linear-gradient(90deg, #EF4444 0%, transparent 100%)" }} />
      <p style={{ margin: "14px 0 0 0", fontSize: "12px", color: "#737373" }}>
        Message generated from devstackedmagazine.com contact form.
      </p>
    </div>
  );
}
