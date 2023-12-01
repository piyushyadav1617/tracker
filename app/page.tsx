import LatestIssues from "./_components/latestIssues";

export default function Dashboard() {
  return <div className="flex flex-col gap-4 lg:flex-row">
    <div className="flex-1">
      <div className="border p-10"></div>
    </div>
    <LatestIssues/>
  </div>;
}
