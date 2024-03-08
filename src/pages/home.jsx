import Twemoji from "../Twemoji"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Home() {
    return (
      <div className="container">
        <h1>Hey, i'm Junie! <Twemoji emoji="🏳️‍⚧️"></Twemoji></h1>
        <p>If you're here, you probably know me from discord, but if you don't, let me introduce myself!</p>
        <br></br>
        <p>My name is Juniper (Junie for short) and i'm a 13 year old trans girl from the UK <Twemoji emoji="🇬🇧"></Twemoji> (yes I do in fact hate it here)<br></br>
        I enjoy web development, programming in general, art, graphic design and video editing!</p>
        <br></br>
        <p>If you would like to see more information on what I prefer to be called, click down here!</p>
        <Link to={"/pronouns"} className="special-button">pronouns</Link>
        <p>I also made the website for <strong>Pixel's Life Series</strong>, which you can visit below:</p>
        <a href="https://tofubeans.github.io/Pixels-Life-Series/" className="special-button">Pixel's Life Series</a>
      </div>
    );
}