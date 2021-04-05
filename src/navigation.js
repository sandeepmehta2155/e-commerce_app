import { useState } from "react";

export function Navigation() {
  // const  seriesChildren = { Roald Dahl's-"Cahrley ANd Chocolate Factory ,  BFG," }

  // const Teen  = { "The Fault in our Stars" , "Th outsider","All th bright places " , " The perks of being wall flower"}

  // const religiuos : https://www.amazon.in/s?k=j+krishnamurti+books+english&i=stripbooks&crid=1N72F7S7JEQY7&sprefix=j+kr%2Cstripbooks%2C343&ref=nb_sb_ss_ts-doa-p_1_4

  //const Auto : "Shoe Dog-Feild night " , "Wovtarising Stieve JObs" ,"Open by andre agashi"
  const [subCategory, setsubCategory] = useState("all");
  const [dropdownIcon, setdropdownIcon] = useState("dropdownIconResponsive");
  let navigationPills,
    count = 0;

  dropdownIcon === "dropdownIcon"
    ? (navigationPills = "navigationPills")
    : (navigationPills = "navigationPillsResponsive");

  const listItems = [
    { id: 0, category: "All" },
    {
      id: 1,
      category: "Novels",
      subNavIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      ),
      subCat: [
        "Young-Adult",
        " Mystery-suspense ",
        "Historical",
        " Drama",
        " Fantasy",
        " Scifi",
        "Graphic Novels(comics)"
      ]
    },
    { id: 2, category: "Poetry" },
    {
      id: 3,
      category: "Non-fiction",
      subNavIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      ),
      subCat: [
        "Economy & Finance",
        " History",
        " Philoshical",
        " Religious",
        " Popular science",
        " Essay"
      ]
    },
    { id: 4, category: "Auto-biography" },
    { id: 5, category: "Today's Deal" }
  ];

  return (
    <>
      <ul className="navigation">
        {listItems.map((obj) => (
          <li
            onMouseOver={() => setsubCategory(obj.category)}
            className={navigationPills}
            key={obj.id}
          >
            {obj.category}
            <span className="subNavIcon">{obj.subNavIcon}</span>
          </li>
        ))}
        <li
          className={dropdownIcon}
          onClick={() => {
            count++;
            if (count % 2 === 0) setdropdownIcon("dropdownIconResponsive");
            else setdropdownIcon("dropdownIcon");
          }}
        >
          &#9776;
        </li>
      </ul>
      <ul className="subNav">
        {listItems.map(
          (obj) =>
            obj.subCat && (
              <span>
                {subCategory === obj.category &&
                  obj.subCat.map((item) => (
                    <li className="subNavPills">{item}</li>
                  ))}
              </span>
            )
        )}
      </ul>
    </>
  );
}
