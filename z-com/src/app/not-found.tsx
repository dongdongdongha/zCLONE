import { NextPage } from "next";
import Link from "../../node_modules/next/link";

const NotFound: NextPage = () => {
  // NotFound: NextPage <= 페이지가 없을 때 여기로 넘어오게 함
  return (
    <div>
      <div>페이지가 존재하지 않습니다.</div>
      <Link href="/search"></Link>
    </div>
  );
};

export default NotFound;
