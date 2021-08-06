import React from "react"
import styles from "./FilterCard.module.css"

export const FilterCard = ({filter}) => {
    return (
        <div className={styles.filter_container}>
            <div className={styles.bus_AC_type_container}>
                <div className={styles.bus_type_container}>Bus Type</div>
                <div className={styles.AC_VOLVO_container}>
                    <div style={{display: "flex", gap: "5px"}}>
                        <input type="checkbox"/>
                        <div style={{marginTop: "3px", fontSize: "13px", color: "#797979", fontWeight: "600"}}>AC</div>
                    </div>
                    <div style={{display: "flex", gap: "5px"}}>
                        <input type="checkbox" />
                        <div style={{marginTop: "3px", fontSize: "13px", color: "#797979", fontWeight: "600"}}>VOLVO</div>
                    </div>
                </div>
                <div style={{display: "flex", marginBottom: "10px"}}>
                    <input type="checkbox" />
                    <div style={{marginLeft: "5px",marginTop: "3px", fontSize: "13px", color: "#797979", fontWeight: "600"}}>NON-AC</div>
                </div>
            </div>
            <div className={styles.seating_type_container}>
                <div className={styles.bus_type_container}>Seating Type</div>
                <div className={styles.AC_VOLVO_container}>
                    <div style={{display: "flex", gap: "5px"}}>
                        <input type="checkbox" />
                        <div style={{marginTop: "3px", fontSize: "13px", color: "#797979", fontWeight: "600"}}>Sleeper</div>
                    </div>
                    <div style={{display: "flex", gap: "5px"}}>
                        <input type="checkbox" />
                        <div style={{marginTop: "3px", fontSize: "13px", color: "#797979", fontWeight: "600"}}>Single Seating</div>
                    </div>
                </div>
            </div>
            <div className={styles.timing_container}>
                <div className={styles.timing_type_container}>Timing</div>
                <div className={styles.time_slot_container}>
                    <div className={styles.time_button_buses_container}>
                        <button className={styles.time_button}>5 AM TO 12 PM</button>
                        <div className={styles.no_of_buses}>Morning(1)</div>
                    </div>
                    <div className={styles.time_button_buses_container}>
                        <button className={styles.time_button}>12 PM TO 5 PM</button>
                        <div className={styles.no_of_buses}>Afternoon(1)</div>
                    </div>
                    <div className={styles.time_button_buses_container}>
                        <button className={styles.time_button}>5 PM TO 10 PM</button>
                        <div className={styles.no_of_buses}>Evening(1)</div>
                    </div>
                    <div className={styles.time_button_buses_container}>
                        <button className={styles.time_button}>10 PM TO 5 AM</button>
                        <div className={styles.no_of_buses}>Overnight(1)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}