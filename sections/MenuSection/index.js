import styles from "./index.module.scss";
import Menu from "./../../modules/MenuCard/MenuCard.component";
import Heading from "../../modules/common/Heading/Heading.component";

export default function MenuSection() {
  return (
    <section className={styles.container}>
      <Heading
        title="Menu"
        subtitle={
          <>
            Per stuzzicare i palati più raffinati, ecco un assaggio offerto da{" "}
            <a
              href="https://www.meetingbanqueting.com/"
              style={{
                textDecoration: "underline",
                textDecorationColor: "#67762e73",
              }}
            >
              Meeting Banqueting
            </a>
          </>
        }
      />
      <Menu />
    </section>
  );
}
