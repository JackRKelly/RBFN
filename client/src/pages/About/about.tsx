import React, { FC, useEffect } from "react";
import "./about.scss";

const About: FC = () => {
  useEffect(() => {
    document.title = "About | RBFN";
  }, []);

  return (
    <main>
      <h1>About</h1>
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
        eius excepturi voluptas nam ipsa consequuntur molestiae, ab consectetur
        quaerat iure. Eos numquam corporis quae rerum, amet, quaerat accusantium
        esse pariatur beatae rem quas dolor incidunt est similique soluta ea
        nulla maiores vitae? Ullam incidunt voluptate quo rerum ex consequatur
        assumenda placeat dolorem cum ducimus eaque iste sunt, vitae corporis,
        tempora pariatur, vero et fugit alias. Doloremque rem similique facilis
        totam esse itaque, saepe optio hic ut, iure sapiente dolores velit sequi
        quibusdam quisquam repellat dolor fugit perspiciatis vel? Nisi a
        accusantium cum officiis, inventore facilis sapiente culpa dolores in
        necessitatibus laudantium eaque adipisci aspernatur quasi sit obcaecati
        saepe reprehenderit libero. Aperiam soluta impedit error aspernatur
        minus. At illo odio, ex nesciunt aut eum repellat, expedita asperiores
        magni facere voluptatem dolorem ab culpa eveniet quod reprehenderit,
        odit commodi.
      </p>
    </main>
  );
};

export default About;
