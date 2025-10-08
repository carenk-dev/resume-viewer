import { useState } from "react";
import FileControls from "./components/FileControls";
import SearchControls from "./components/SearchControls";
import ResumeList from "./components/ResumeList";

interface Resume {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLoad = () => {
    const dummyData: Resume[] = [
      {
        id: 1,
        title: "レジュメ管理ツールの新規開発",
        description:
          "レジュメ管理ツールの保守・運用を行いました。フロントエンジニアとして参加し、React、typescript、viteを使用して環境構築から行いました。",
      },
      {
        id: 2,
        title: "食材・栄養管理サービスの開発・保守",
        description:
          "食材・栄養管理サービスの開発・保守を行いました。サーバーサイドはruby on rails、フロントエンドはReact、インフラはdockerを使用しており、フルスタックエンジニアとして作業を行いました。",
      },
      {
        id: 3,
        title: "プログラミング教育サービスの開発・保守",
        description:
          "プログラミング教育サービスの開発・保守を行いました。サーバーサイドの担当として、障害対応やリファクタリング、軽微な機能追加を主に担当していました。",
      },
    ];
    setResumes(dummyData);
  };

  const filteredResumes = searchQuery
    ? resumes.filter(
        (resume) =>
          resume.title.includes(searchQuery) ||
          resume.description.includes(searchQuery)
      )
    : resumes;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-2">職務経歴Viewer</h1>
      <p className="mb-6 text-sm text-gray-600">
        職務経歴を読み込み、書き出しができます。読み込んだ職務経歴を絞り込んで確認することができます。
        データはサーバーに保存されず、ローカルで処理されます。
      </p>
      <FileControls onLoad={handleLoad} />
      <SearchControls query={searchQuery} onChange={setSearchQuery} />
      <ResumeList resumeList={filteredResumes} />
    </div>
  );
}
export default App;
