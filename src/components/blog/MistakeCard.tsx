
interface MistakeCardProps {
  number: number;
  title: string;
  problem: string;
  solutions: string[];
}

const MistakeCard = ({ number, title, problem, solutions }: MistakeCardProps) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{number}. {title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>The Problem:</strong> {problem}
      </p>
      <div className="bg-gray-50 border-l-4 border-l-blue-500 p-4 mb-4">
        <p className="font-semibold text-gray-900 mb-2">How to Fix It:</p>
        <ul className="text-gray-700 space-y-1">
          {solutions.map((solution, index) => (
            <li key={index}>{solution}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MistakeCard;
