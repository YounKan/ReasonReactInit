
[@react.component]
let make = (~children) => {
  let countSquares = switch(Belt.Int.fromString(children)) {
    | Some(count) => count
    | None => 0
};
  let squares = Belt.Array.range(1,countSquares);
  
  <div
    style={ReactDOMRe.Style.make(
      ~alignItems="center",
      ~justifyContent="center",
      (),
    )}>
    {
        squares
        ->Belt.Array.mapWithIndex((i,x) => {

            let imageStyleRow =
                    ReactDOMRe.Style.make(
                        ~display="flex",
                        ~margin="18px",
                        ~alignItems="center",
                        ~justifyContent="center",
                    (),
                    );
                    
                if((x mod 3) === 0){
                <div key=string_of_int(x) style=imageStyleRow>
                
                    <div  style={ReactDOMRe.Style.make(
                        ~height="120px",
                        ~width="120px",
                        ~margin="18px",
                        ~backgroundColor="rgb("++string_of_int(Js.Math.random_int(0,255))++","++string_of_int(Js.Math.random_int(0,255))++"," ++string_of_int(Js.Math.random_int(0,255))++")",     
                        ~borderRadius="8px",
                        ~boxShadow="0px 4px 16px rgb(200, 200, 200)",
                        ~backgroundSize="cover",
                        ~backgroundPosition="center",
                        (),
                      )}/>
                      <div  style={ReactDOMRe.Style.make(
                        ~height="120px",
                        ~width="120px",
                        ~margin="18px",
                        ~backgroundColor="rgb("++string_of_int(Js.Math.random_int(0,255))++","++string_of_int(Js.Math.random_int(0,255))++"," ++string_of_int(Js.Math.random_int(0,255))++")",     
                        ~borderRadius="8px",
                        ~boxShadow="0px 4px 16px rgb(200, 200, 200)",
                        ~backgroundSize="cover",
                        ~backgroundPosition="center",
                        (),
                      )}/>
                      <div  style={ReactDOMRe.Style.make(
                        ~height="120px",
                        ~width="120px",
                        ~margin="18px",
                        ~backgroundColor="rgb("++string_of_int(Js.Math.random_int(0,255))++","++string_of_int(Js.Math.random_int(0,255))++"," ++string_of_int(Js.Math.random_int(0,255))++")",     
                        ~borderRadius="8px",
                        ~boxShadow="0px 4px 16px rgb(200, 200, 200)",
                        ~backgroundSize="cover",
                        ~backgroundPosition="center",
                        (),
                      )}/>
                
                </div>;
                }else if(countSquares - x == 0){
                    let countRow = (x/3)*3
                        if(x-countRow == 1){
                            <div key=string_of_int(x) style=imageStyleRow>
                            <div  style={ReactDOMRe.Style.make(
                                ~height="120px",
                                ~width="120px",
                                ~margin="18px",
                                ~backgroundColor="rgb("++string_of_int(Js.Math.random_int(0,255))++","++string_of_int(Js.Math.random_int(0,255))++"," ++string_of_int(Js.Math.random_int(0,255))++")",     
                                ~borderRadius="8px",
                                ~boxShadow="0px 4px 16px rgb(200, 200, 200)",
                                ~backgroundSize="cover",
                                ~backgroundPosition="center",
                                (),
                              )}/>
                            </div>;
                        }else{
                            <div key=string_of_int(x) style=imageStyleRow>
                            <div  style={ReactDOMRe.Style.make(
                                ~height="120px",
                                ~width="120px",
                                ~margin="18px",
                                ~backgroundColor="rgb("++string_of_int(Js.Math.random_int(0,255))++","++string_of_int(Js.Math.random_int(0,255))++"," ++string_of_int(Js.Math.random_int(0,255))++")",     
                                ~borderRadius="8px",
                                ~boxShadow="0px 4px 16px rgb(200, 200, 200)",
                                ~backgroundSize="cover",
                                ~backgroundPosition="center",
                                (),
                              )}/>
                              <div  style={ReactDOMRe.Style.make(
                                ~height="120px",
                                ~width="120px",
                                ~margin="18px",
                                ~backgroundColor="rgb("++string_of_int(Js.Math.random_int(0,255))++","++string_of_int(Js.Math.random_int(0,255))++"," ++string_of_int(Js.Math.random_int(0,255))++")",     
                                ~borderRadius="8px",
                                ~boxShadow="0px 4px 16px rgb(200, 200, 200)",
                                ~backgroundSize="cover",
                                ~backgroundPosition="center",
                                (),
                              )}/>
                            </div>;
                        }
                }else{
                   React.null
                }
         })
         ->React.array
    }
  </div>;
};
