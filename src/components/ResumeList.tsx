interface Resume {
  id: number;
  title: string;
  description: string;
}

interface Props {
  resumeList: Resume[];
}

function ResumeList({ resumeList }: Props) {
  if (resumeList.length === 0) {
    return <p className="text-gray-500">表示するデータがありません。</p>;
  }

  return (
    <ul className="space-y-4">
      {resumeList.map((resume) => (
        <li key={resume.id} className="p-4 border border-gray-300 rounded">
          <h2>{resume.title}</h2>
          <p>{resume.description}</p>
        </li>
      ))}
    </ul>
  );
}
export default ResumeList;
