const today = new Date();

const curHr = today.getHours();
const greeting =
  curHr < 12 ? "Good morning" : curHr < 18 ? "Good afternoon" : "Good evening";

const dateString = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "short",
  day: "numeric",
}).format(today);

interface WelcomeSignProps {
  userName: string;
}

const WelcomeSign = ({ userName }: WelcomeSignProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight">
        <span className="text-content">{greeting}, </span>
        <span className="text-primary">{userName}</span>
      </h2>

      <div className="flex items-center gap-2 mt-1 text-tertiary">
        <span className="font-medium">It's {dateString}</span>
        <span className="w-1 h-1 rounded-full bg-tertiary/40" />
        <span>Here's what's on your plate</span>
      </div>
    </div>
  );
};

export default WelcomeSign;
