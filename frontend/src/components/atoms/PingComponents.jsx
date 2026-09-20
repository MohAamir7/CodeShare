import usePing from "../../hoonks/apis/queries/usePing";

export const PingComponent = () => {
    const { isLoading, data } = usePing();

//   if(isLoading) {
//     return (
//       <>
//         Loading...
//       </>
//     )
//   }

  return (
    <>
      {/* Hello {data.message} */}
      hello
    </>
  )
}