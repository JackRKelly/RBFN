import React, { FC, useEffect } from "react";
import "./about.scss";

const About: FC = () => {
  useEffect(() => {
    document.title = "About | RBFN";
  }, []);

  return (
    <main>
      <h1>About RBFN</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quas
        architecto nihil consectetur dolores laboriosam recusandae ex ducimus
        eos, impedit quisquam hic excepturi! At sed, voluptates beatae quia
        itaque, sapiente magni non recusandae minus maiores quisquam aut quod
        explicabo odio optio ipsa dolorum. Autem praesentium architecto
        repellat? Omnis obcaecati eveniet alias neque consequuntur eius incidunt
        ad consequatur deserunt a explicabo vero laudantium amet esse
        consectetur blanditiis, dignissimos aliquam. Quia iure, voluptatibus
        explicabo accusamus excepturi impedit? Ex delectus nisi laudantium? Quas
        repellat amet laboriosam sequi cumque blanditiis distinctio dolor esse!
        Repellendus placeat adipisci delectus necessitatibus odio ipsa, nulla
        quia aliquid recusandae. Quasi quidem ducimus quisquam quia ut suscipit
        tenetur incidunt totam aliquam accusamus unde sint numquam delectus modi
        illo non voluptas id, aliquid facere voluptatum. Doloribus illo porro
        eius excepturi.
      </p>
    </main>
  );
};

export default About;
