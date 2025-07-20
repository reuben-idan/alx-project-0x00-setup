import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <div className="flex gap-4 mb-6">
        <Button title="Small Rounded-sm" className="text-xs rounded-sm" />
        <Button title="Medium Rounded-md" className="text-base rounded-md" />
        <Button title="Large Rounded-full" className="text-lg rounded-full" />
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export default Landing;
