export async function getServerSideProps() {
  return {
    redirect: {
      destination: "https://snapshot.org/#/finpilot.eth",
      permanent: false,
    },
  };
}

export default function DAO() {
  return null;
}
