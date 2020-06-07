import React, {
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./newsletters.scss";
import { NewsletterT } from "../../common/newsletter";
import { differenceDate, formatDate } from "../../common/date";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Newsletters: FC<Props> = (props) => {
  const { setLoading } = props;
  const [newsletters, setNewsletters] = useState<Array<any>>([
    {
      _id: "5ed289ae6db5150d102a9006",
      Title: "Test newsletter",
      createdAt: "2020-05-30T16:28:30.426Z",
      updatedAt: "2020-06-01T17:10:27.712Z",
      __v: 0,
      PDF: "5ed288f03111b83194a74e02",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam accusantium autem quo illo ab eligendi! Reprehenderit iste dolorem ex quia saepe esse culpa quidem quam, facere deleniti rerum nesciunt quod ab delectus a, eligendi magnam officiis rem nobis aperiam assumenda. Soluta ipsum debitis illo sequi maxime explicabo beatae, dolor deleniti quasi excepturi nobis voluptatum quod, nam tempora! Adipisci sapiente explicabo dicta accusamus odit quod itaque beatae iure, excepturi molestiae in rem doloribus ab aperiam corrupti ea, cupiditate natus eaque. Reiciendis numquam ab neque porro accusantium. Alias perferendis provident ratione!",
      title: "Newsletter #001",
      pdf: {
        _id: "5ed288f03111b83194a74e02",
        name: "Artboard 1 copy 6",
        alternativeText: "",
        caption: "",
        hash: "Artboard_1_copy_6_6015ba80af",
        ext: ".pdf",
        mime: "application/pdf",
        size: 68.95,
        url: "/uploads/Artboard_1_copy_6_6015ba80af.pdf",
        provider: "local",
        width: null,
        height: null,
        related: ["5ed289ae6db5150d102a9006", "5ed289ae6db5150d102a9006"],
        createdAt: "2020-05-30T16:25:20.974Z",
        updatedAt: "2020-06-01T17:06:46.806Z",
        __v: 0,
        id: "5ed288f03111b83194a74e02",
      },
      id: "5ed289ae6db5150d102a9006",
    },
    {
      _id: "5ed537a520ebcf287cb3b405",
      title: "test newsletter #2",
      description: "test tests testset description here",
      createdAt: "2020-06-01T17:15:17.142Z",
      updatedAt: "2020-06-01T17:15:17.294Z",
      __v: 0,
      pdf: {
        _id: "5ed537a220ebcf287cb3b404",
        name: "Jack-Kelly-Cerner-Scholars",
        alternativeText: "",
        caption: "",
        hash: "Jack_Kelly_Cerner_Scholars_66cc762366",
        ext: ".pdf",
        mime: "application/pdf",
        size: 195.16,
        url: "/uploads/Jack_Kelly_Cerner_Scholars_66cc762366.pdf",
        provider: "local",
        width: null,
        height: null,
        related: ["5ed537a520ebcf287cb3b405"],
        createdAt: "2020-06-01T17:15:14.627Z",
        updatedAt: "2020-06-01T17:15:17.224Z",
        __v: 0,
        id: "5ed537a220ebcf287cb3b404",
      },
      id: "5ed537a520ebcf287cb3b405",
    },
  ]);

  useEffect(() => {
    document.title = "Newsletter | RBFN";
  }, []);

  return (
    <main>
      <h1>Newsletter</h1>
      <h2>Recent editions:</h2>
      <ul className="recent-editions">
        {newsletters?.map((newsletter, index) => (
          <li key={index}>
            <h5>{newsletter.title}</h5>
            <h6>
              {differenceDate(newsletter.createdAt) * -1 === 1
                ? "Posted Yesterday"
                : differenceDate(newsletter.createdAt) * -1 === 0
                ? "Posted Today"
                : `${formatDate(newsletter.createdAt)} - 
                    ${differenceDate(newsletter.createdAt) * -1} days ago`}
            </h6>
            <p>{newsletter.description.substring(0, 120)}...</p>
            <div className="button-container">
              <a
                href={`http://localhost:1337${newsletter.pdf.url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Newsletter
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Newsletters;
