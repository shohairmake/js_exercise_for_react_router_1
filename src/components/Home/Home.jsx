import React from "react";
import Button from "../Button/Button";

function Home({ history }) {
  return (
    <div>
      <h1>ホーム</h1>
      <Button
        clickEvent={() => {
          history.push("/quiz");
        }}
      >
        クイズページへ移動
      </Button>
    </div>
  );
}

export default Home;
