import type { Resume } from "../types/resume";

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
        <li
          key={resume.id}
          className="p-6 border border-gray-300 rounded mb-6 bg-white shadow-sm"
        >
          <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-1">
            {resume.title}
          </h2>
          <div className="grid grid-cols-5 gap-4 text-sm">
            <div className="font-semibold col-span-1 text-gray-600">期間</div>
            <div className="col-span-4">{resume.duration}</div>

            <div className="font-semibold col-span-1 text-gray-600">
              業務内容
            </div>
            <div className="col-span-4 whitespace-pre-wrap">
              {resume.description}
            </div>

            <div className="font-semibold col-span-1 text-gray-600">特徴</div>
            <div className="col-span-4 whitespace-pre-wrap">
              {resume.features}
            </div>

            <div className="font-semibold col-span-1 text-gray-600">
              担当フェーズ
            </div>
            <div className="col-span-4">{resume.phases}</div>

            <div className="font-semibold col-span-1 text-gray-600">規模</div>
            <div className="col-span-4">{resume.scale}</div>

            <div className="font-semibold col-span-1 text-gray-600">環境</div>
            <div className="col-span-4 whitespace-pre-wrap">
              {resume.environment}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default ResumeList;
