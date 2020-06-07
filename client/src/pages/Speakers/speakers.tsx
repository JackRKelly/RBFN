import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./speakers.scss";
import { SpeakerT } from "../../common/speaker";
import { formatDate, differenceDate } from "../../common/date";
import { Link } from "react-router-dom";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Speakers: FC<Props> = (props) => {
  const { setLoading } = props;
  const [speakers, setSpeakers] = useState<Array<any>>([
    {
      _id: "5ed52a1fc3e16936a0a72ee6",
      title: "Test Speaker",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam accusantium autem quo illo ab eligendi! Reprehenderit iste dolorem ex quia saepe esse culpa quidem quam, facere deleniti rerum nesciunt quod ab delectus a, eligendi magnam officiis rem nobis aperiam assumenda. Soluta ipsum debitis illo sequi maxime explicabo beatae, dolor deleniti quasi excepturi nobis voluptatum quod, nam tempora**! Adipisci sapiente explicabo dicta accusamus odit quod itaque beatae iure, excepturi molestiae in rem doloribus ab aperiam corrupti ea, cupiditate natus eaque. Reiciendis numquam ab neque porro accusantium. Alias perferendis provident ratione! Provident officiis ad magnam quisquam culpa quibusdam at non error atque adipisci quasi porro aperiam temporibus dolor sapiente quaerat a hic doloribus ipsam cupiditate iste autem, id dignissimos consequatur. Fuga incidunt atque doloribus consectetur molestias voluptatem rem, laborum facere voluptates expedita repellat deleniti. Tempore aperiam porro molestias ipsam placeat a labore distinctio soluta temporibus voluptate earum fugiat, numquam illum nihil libero consectetur saepe? Cum dolorem earum quis, nihil laborum natus minima ipsu**m hic magnam optio quidem tenetur! Sunt doloribus est aperiam doloremque, ipsum porro id culpa minus reiciendis provident temporibus dignissimos, omnis magni dolor odit? Ratione deleniti libero quo eum inventore asperiores, perspiciatis corporis iure quaerat reiciendis, \n\nvitae officia quidem fugit maxime. Obcaecati dolorum recusandae at deleniti fuga explicabo illo esse voluptatibus adipisci harum voluptates sequi aliquid qui, quam maiores id reiciendis. Quibusdam adipisci, unde maiores mollitia doloremque laborum nulla hic quo necessitatibus? Autem obcaecati, soluta magnam adipisci \n\nad pariatur illum rerum. Quae ipsa aut libero voluptate saepe rerum tempore sit illum, in molestias ipsum, quam maxime eius nam ducimus provident, alias eum optio! Laudantium est optio sed vel? Distinctio, vitae itaque? Saepe placeat beatae excepturi earum facilis repellat nam? Optio obcaecati earum excepturi ipsa non! \n\nOfficiis tempore molestias soluta amet? Ducimus nisi magni quibusdam voluptatem sequi qui voluptatum odio eveniet excepturi \n\nfugit minima quasi, quam odit maiores exercitationem dicta nihil. Delectus aut voluptates error distinctio iusto ut nulla iste, sed aspernatur modi beatae odit nesciunt fuga doloribus perferendis quibusdam non accusantium ratione impedit suscipit eum laboriosam explicabo vel voluptatem? Laboriosam alias, odio distinctio corrupti voluptatum vitae suscipit dolore, ipsa expedita porro, ea qui corporis iste molestiae quo! Voluptas quos est assumenda earum enim sunt reiciendis veritatis provident natus animi ad, doloribus dicta eveniet inventore repudiandae pariatur, hic facere accusamus suscipit. Excepturi sit, quod accusamus repudiandae assumenda quaerat aliquid consequuntur blanditiis molestias, nobis fugit pariatur tempore. Dignissimos tempore dolorum eius, quos fugiat sint animi itaque voluptatibus? Pariatur, unde eaque nostrum quos non a eos consectetur, vel quisquam quasi cumque repellat? Modi neque recusandae omnis reiciendis atque laborum laboriosam. Repellendus totam alias, quas illum odio laborum reiciendis quis dolorum exercitationem! Quo et officiis reiciendis asperiores vitae quis quasi, dolorem obcaecati odit aut consequuntur culpa molestias animi repellat omnis, enim saepe vero, dolor molestiae non veniam impedit cum? Libero accusantium laudantium necessitatibus pariatur. Dolorem sed dicta, assumenda asperiores esse, iste, ratione corrupti rerum maiores ut voluptate labore ex quod dolores delectus cum quia quam enim. Possimus iure consectetur veniam",
      createdAt: "2020-06-01T16:17:35.240Z",
      updatedAt: "2020-06-06T15:03:04.548Z",
      __v: 0,
      banner: {
        _id: "5ed2b456fc46ba59c03794e9",
        name: "roundtable-banner-image",
        alternativeText: "",
        caption: "",
        hash: "roundtable_banner_image_6036b0217f",
        ext: ".jpeg",
        mime: "image/jpeg",
        size: 41.58,
        width: 2000,
        height: 500,
        url: "/uploads/roundtable_banner_image_6036b0217f.jpeg",
        formats: {
          thumbnail: {
            hash: "thumbnail_roundtable_banner_image_6036b0217f",
            ext: ".jpeg",
            mime: "image/jpeg",
            width: 245,
            height: 61,
            size: 1.92,
            path: null,
            url: "/uploads/thumbnail_roundtable_banner_image_6036b0217f.jpeg",
          },
          large: {
            hash: "large_roundtable_banner_image_6036b0217f",
            ext: ".jpeg",
            mime: "image/jpeg",
            width: 1000,
            height: 250,
            size: 17.28,
            path: null,
            url: "/uploads/large_roundtable_banner_image_6036b0217f.jpeg",
          },
          medium: {
            hash: "medium_roundtable_banner_image_6036b0217f",
            ext: ".jpeg",
            mime: "image/jpeg",
            width: 750,
            height: 188,
            size: 10.8,
            path: null,
            url: "/uploads/medium_roundtable_banner_image_6036b0217f.jpeg",
          },
          small: {
            hash: "small_roundtable_banner_image_6036b0217f",
            ext: ".jpeg",
            mime: "image/jpeg",
            width: 500,
            height: 125,
            size: 5.67,
            path: null,
            url: "/uploads/small_roundtable_banner_image_6036b0217f.jpeg",
          },
        },
        provider: "local",
        related: [
          "5ed2b166fc46ba59c03794e8",
          "5ed2818f7f4aa727e0e02a58",
          "5ed3c3e3f0eeab58bc155513",
          "5ed52a1fc3e16936a0a72ee6",
          "5edbaa0678742506c8e6e193",
          "5edd07eb61a7d51d80d33479",
        ],
        createdAt: "2020-05-30T19:30:30.488Z",
        updatedAt: "2020-06-07T15:29:47.736Z",
        __v: 0,
        id: "5ed2b456fc46ba59c03794e9",
      },
      id: "5ed52a1fc3e16936a0a72ee6",
    },
    {
      _id: "5edbaa0678742506c8e6e193",
      title: "test",
      content: "testse",
      createdAt: "2020-06-06T14:36:54.246Z",
      updatedAt: "2020-06-06T14:36:54.410Z",
      __v: 0,
      banner: {
        _id: "5ed2b456fc46ba59c03794e9",
        name: "roundtable-banner-image",
        alternativeText: "",
        caption: "",
        hash: "roundtable_banner_image_6036b0217f",
        ext: ".jpeg",
        mime: "image/jpeg",
        size: 41.58,
        width: 2000,
        height: 500,
        url: "/uploads/roundtable_banner_image_6036b0217f.jpeg",
        formats: {
          thumbnail: {
            hash: "thumbnail_roundtable_banner_image_6036b0217f",
            ext: ".jpeg",
            mime: "image/jpeg",
            width: 245,
            height: 61,
            size: 1.92,
            path: null,
            url: "/uploads/thumbnail_roundtable_banner_image_6036b0217f.jpeg",
          },
          large: {
            hash: "large_roundtable_banner_image_6036b0217f",
            ext: ".jpeg",
            mime: "image/jpeg",
            width: 1000,
            height: 250,
            size: 17.28,
            path: null,
            url: "/uploads/large_roundtable_banner_image_6036b0217f.jpeg",
          },
          medium: {
            hash: "medium_roundtable_banner_image_6036b0217f",
            ext: ".jpeg",
            mime: "image/jpeg",
            width: 750,
            height: 188,
            size: 10.8,
            path: null,
            url: "/uploads/medium_roundtable_banner_image_6036b0217f.jpeg",
          },
          small: {
            hash: "small_roundtable_banner_image_6036b0217f",
            ext: ".jpeg",
            mime: "image/jpeg",
            width: 500,
            height: 125,
            size: 5.67,
            path: null,
            url: "/uploads/small_roundtable_banner_image_6036b0217f.jpeg",
          },
        },
        provider: "local",
        related: [
          "5ed2b166fc46ba59c03794e8",
          "5ed2818f7f4aa727e0e02a58",
          "5ed3c3e3f0eeab58bc155513",
          "5ed52a1fc3e16936a0a72ee6",
          "5edbaa0678742506c8e6e193",
          "5edd07eb61a7d51d80d33479",
        ],
        createdAt: "2020-05-30T19:30:30.488Z",
        updatedAt: "2020-06-07T15:29:47.736Z",
        __v: 0,
        id: "5ed2b456fc46ba59c03794e9",
      },
      id: "5edbaa0678742506c8e6e193",
    },
  ]);

  useEffect(() => {
    document.title = "Speakers | RBFN";
  }, []);

  return (
    <main>
      <h1>Speakers</h1>
      <h2>Past speakers:</h2>
      <ul className="past-speakers">
        {speakers?.map((speaker, index) => (
          <li key={index}>
            <h5>{speaker.title}</h5>
            <h6>
              {differenceDate(speaker.createdAt) * -1 === 1
                ? "Posted Yesterday"
                : differenceDate(speaker.createdAt) * -1 === 0
                ? "Posted Today"
                : `${formatDate(speaker.createdAt)} - 
              ${differenceDate(speaker.createdAt) * -1} days ago`}
            </h6>
            <p>{speaker.content.substring(0, 120)}...</p>
            <div className="button-container">
              <Link to={`/speaker/${speaker.id}`}>View Series</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Speakers;
