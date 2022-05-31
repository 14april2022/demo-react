import React from "react";
import Movie from "./Movie";
import { movieName } from "./movies";
function Main(props) {
  return (
    <div className="container">
      <h2>Learning Props</h2>
      <hr />
      <h1 className="text-center"> {props.title} </h1>
      <hr />
      <div className="row">
        {/* jsx to js => {} */}
        {movieName.map((item) => {
          const { id, movieName, desp } = item;
          return <Movie key={id} movieName={movieName} desp={desp} />;
        })}
        {/* <Movie
          movieName="KGF"
          desp=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, at illum dolore culpa nobis, rem perspiciatis distinctio nisi eaque ab accusamus itaque qui illo vero reprehenderit dolor cum sequi? Quasi."
        />
        <Movie
          movieName="Puspa"
          desp=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, at illum dolore culpa nobis, rem perspiciatis distinctio nisi eaque ab accusamus itaque qui illo vero reprehenderit dolor cum sequi? Quasi."
        />
        <Movie
          movieName="RRR"
          desp=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, at illum dolore culpa nobis, rem perspiciatis distinctio nisi eaque ab accusamus itaque qui illo vero reprehenderit dolor cum sequi? Quasi."
        />
        <Movie
          movieName="Puspa 2"
          desp=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, at illum dolore culpa nobis, rem perspiciatis distinctio nisi eaque ab accusamus itaque qui illo vero reprehenderit dolor cum sequi? Quasi."
        />
        <Movie
          movieName="RRR 2"
          desp=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, at illum dolore culpa nobis, rem perspiciatis distinctio nisi eaque ab accusamus itaque qui illo vero reprehenderit dolor cum sequi? Quasi."
        /> */}
      </div>
    </div>
  );
}

export default Main;
