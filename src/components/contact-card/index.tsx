import "./styles.css";

interface ContactCardProps {
  title?: string;
  subtitle?: string;
  iconUrl?: string;
}

export default function ContactCard({
  title = "",
  subtitle = "",
  iconUrl = "",
}: ContactCardProps) {
  return (
    <div className="contact-card">
      <img src={iconUrl} alt={title} className="contact-icon" />
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}
