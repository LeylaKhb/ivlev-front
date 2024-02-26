import React from "react";
import "../styles/schedule.css";
import FirstBlock from "../components/schedule/FirstBlock";
import CalcuatorBlock from "../components/schedule/CalcuatorBlock";
import {Helmet, HelmetProvider} from "react-helmet-async";

class Schedule extends React.Component {

    render() {
        return (
            <div className="page_content" style={{ flexFlow: "column"}}>
                <HelmetProvider>
                    <Helmet
                        title="Расписание поставок"
                    />
                </HelmetProvider>

                <FirstBlock />
                <CalcuatorBlock />
            </div>
        )
    }
}

export default Schedule;