interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const getBadgeStyles = () => {
    if (score > 69) {
      return {
        background: 'bg-green-100',
        text: 'text-green-600',
        label: 'Strong'
      };
    } else if (score > 49) {
      return {
        background: 'bg-yellow-100',
        text: 'text-yellow-600',
        label: 'Good Start'
      };
    } else {
      return {
        background: 'bg-red-100',
        text: 'text-red-600',
        label: 'Needs Work'
      };
    }
  };

  const { background, text, label } = getBadgeStyles();

  return (
    <div className={`inline-flex px-3 py-1 rounded-full ${background}`}>
      <p className={`text-sm font-medium ${text}`}>{label}</p>
    </div>
  );
};

export default ScoreBadge;