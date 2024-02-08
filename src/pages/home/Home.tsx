import React from "react";
import FirstBlock from "../../components/home/FirstBlock";
import SecondBlock from "../../components/home/SecondBlock";
import ThirdBlock from "../../components/home/ThirdBlock";
import FourthBlock from "../../components/home/FourthBlock";
import FifthBlock from "../../components/home/FifthBlock";
import SixthBlock from "../../components/home/SixthBlock";
import SeventhBlock from "../../components/home/SeventhBlock";
import NinthBlock from "../../components/home/NinthBlock";
import EighthBlock from "../../components/home/EighthBlock";
import TenthBlock from "../../components/home/TenthBlock";
import SocialNetworkButton from "../../components/SocialNetworkButton";

const Home: React.FC<{}> = () => {
    return (
        <div style={{width: '100%'}}>
            <FirstBlock />
            <SecondBlock />
            <ThirdBlock />
            <FourthBlock />
            <FifthBlock />
            <SixthBlock />
            <SeventhBlock />
            <EighthBlock />
            <NinthBlock />
            <TenthBlock />

            <SocialNetworkButton />
        </div>
    )
}

export default Home;

