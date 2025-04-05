export default function ({ image }) {
  return (
    <section
      style={{
        paddingTop: "2rem",
        height: "80%",
        width: "70%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={image} alt="A tick image" srcset="" />
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            color: "hsl(213, 96%, 18%)",
          }}
        >
          Thank you!
        </h1>

        <p
          style={{
            color: " hsl(231, 11%, 63%)",
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          Thanks for confirming your subscription!We hope you have <br /> fun
          using our platform.If you ever need support please feel <br /> free to
          email us at support@loremgaming.com
        </p>
      </div>
    </section>
  );
}
