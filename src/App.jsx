import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");
  const [placeOfOccurrence, setPlaceOfOccurrence] = useState("");
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");
  const [hour, setHour] = useState("");
  const [injuredPersonDetails, setInjuredPersonDetails] = useState("");
  const [injuredPersonSex, setInjuredPersonSex] = useState("");
  const [injuredPersonAge, setInjuredPersonAge] = useState("");
  const [yearOccupation, setYearOccupation] = useState("");
  const [yearOfExp, setYearOfExp] = useState("");
  const [natureAndExtent, setNatureAndExtent] = useState("");
  const [treatmentProvider, setTreatmentProvider] = useState("");
  const [disabilityDuration, setDisabilityDuration] = useState("");
  const [cargoTypeName, setCargoTypeName] = useState("");
  const [startHour, setStartHour] = useState("");
  const [causeOfAccident, setCauseOfAccident] = useState("");
  const [accident, setAccident] = useState("");
  const [causedByMachinery, setCausedByMachinary] = useState(false);
  const [machineAndPart, setMachineAndPart] = useState("");
  const [movedByMechPower, setMovedByMechPower] = useState(false);
  const [activity, setActivity] = useState("");
  const [dangerousOccurrence, setDangerousOccurrence] = useState("");
  const [collapseFailureLiftingAppliance, setCollapseFailureLiftingAppliance] =
    useState("");
  const [ropeChainBreakageNature, setRopeChainBreakageNature] = useState("");
  const [collapseFailureMeansOfAccess, setCollapseMeansOfAccess] = useState("");
  const [anyOtherDangerousOccurrence, setAnyOtherDangerousOccurrence] =
    useState("");

  const handleCheckBox = (ev) => {
    setCausedByMachinary(!causedByMachinery);
  };

  const ifMovedByMechPower = (ev) => {
    setMovedByMechPower(!movedByMechPower);
  };

  return (
    <>
      <div id="App-Main">
        <div id="Form-Main">
          <h1>FORM XII</h1>
          <div id="User-Details">
            <div className="Section">
              <label htmlFor="First-Name">First Name</label>
              <input
                type="text"
                id="First-Name"
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
              />
            </div>
            <div className="Section">
              <label htmlFor="Last-Name">Last Name</label>
              <input
                type="text"
                id="Last-Name"
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
              />
            </div>
            <div className="Section">
              <label htmlFor="Email">Email Name</label>
              <input
                type="text"
                id="Email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>
          </div>
          <hr />
          <div id="Form-Responses">
            <div className="Section">
              <label htmlFor="Employer-Name">1.Name of the Employer</label>
              <input
                type="text"
                name="Employer-Name"
                id="Employer-Name"
                onChange={(ev) => setEmployerName(ev.target.value)}
              />
            </div>
            <hr />
            <div className="Section">
              <label htmlFor="Employer-Address">
                2.Address of the Employer
              </label>
              <input
                type="text"
                name="Employer-Address"
                id="Employer-Address"
                onChange={(ev) => setEmployerAddress(ev.target.value)}
              />
            </div>
            <hr />
            <div className="Section">
              <label htmlFor="Place-Of-Occurrence">
                3.Ship or other exact place where accident or dangerous
                occurrence happened:
              </label>
              <input
                type="text"
                name="Place-Of-Occurrence"
                id="Place-Of-Occurrence"
                onChange={(ev) => setPlaceOfOccurrence(ev.target.value)}
              />
            </div>
            <hr />
            <div id="Accident-Time-Details">
              <p>4.Date, Shift and hour of accident or dangerous occurrence:</p>
              <div className="Section">
                <label htmlFor="Date">Date</label>
                <input
                  type="date"
                  id="Date"
                  onChange={(ev) => setDate(ev.target.value)}
                />
              </div>
              <div className="Section">
                <label htmlFor="Shit">Shift </label>
                <input
                  type="text"
                  id="Shift"
                  onChange={(ev) => setShift(ev.target.value)}
                />
              </div>
              <div className="Section">
                <label htmlFor="Hour">Hour</label>
                <input
                  type="text"
                  id="Hour"
                  onChange={(ev) => setHour(ev.target.value)}
                />
              </div>
            </div>
            <hr />
            <div id="Question-Five" className="Question">
              <div className="Section">
                <label htmlFor="Injured-Person-Details">
                  5. (i) Name and address of injured person:
                </label>
                <input
                  type="text"
                  id="Injured-Person-Details"
                  value={injuredPersonDetails}
                  onChange={(ev) => setInjuredPersonDetails(ev.target.value)}
                />
                <br />
                <label htmlFor="Injured-Person-Sex">Sex:</label>
                <input
                  type="text"
                  id="Injured-Person-Sex"
                  value={injuredPersonSex}
                  onChange={(ev) => setInjuredPersonSex(ev.target.value)}
                />
                <label htmlFor="Injured-Person-Age">Age:</label>
                <input
                  type="text"
                  id="Injured-Person-Age"
                  value={injuredPersonAge}
                  onChange={(ev) => setInjuredPersonAge(ev.target.value)}
                />
                <label htmlFor="Year-Occupation">Year. Occupation: </label>
                <input
                  type="text"
                  id="Year-Occupation"
                  value={yearOccupation}
                  onChange={(ev) => setYearOccupation(ev.target.value)}
                />
                <br />
                <label htmlFor="Years-Of-Exp">
                  No. Experience in the trade:
                </label>
                <input
                  type="text"
                  id="Years-Of-Exp"
                  value={yearOfExp}
                  onChange={(ev) => setYearOfExp(ev.target.value)}
                />
              </div>
              <label htmlFor="Nature-Extent">
                (ii) Nature and extent of injuries, (e.g. fatal, loss of finger,
                fracture of legs):
              </label>
              <input
                type="text"
                id="Nature-Extent"
                value={natureAndExtent}
                onChange={(ev) => setNatureAndExtent(ev.target.value)}
              />
              <label htmlFor="Treatment-Provider">
                (iii) By whom treatment was given?:
              </label>
              <input
                type="text"
                id="Treatment-Provider"
                value={treatmentProvider}
                onChange={(ev) => setTreatmentProvider(ev.target.value)}
              />
              <label htmlFor="Disability-Duration">
                (iv) Was the injured person disabled for more than forty-eight
                hours?:
              </label>
              <input
                type="text"
                id="Disability-Duration"
                value={disabilityDuration}
                onChange={(ev) => setDisabilityDuration(ev.target.value)}
              />
              <label htmlFor="Cargo-Type-Name">
                (v) Type and name of cargo handled:
              </label>
              <input
                type="text"
                id="Cargo-Type-Name"
                value={cargoTypeName}
                onChange={(ev) => setCargoTypeName(ev.target.value)}
              />
            </div>
            <hr />
            <div className="Section">
              <label htmlFor="Start-Hour">
                6. Hour at which the injured person started work:
              </label>
              <input
                type="text"
                id="Start-Hour"
                value={startHour}
                onChange={(ev) => setStartHour(ev.target.value)}
              />
            </div>
            <hr />
            <div className="Section">
              <label htmlFor="Cause-Of-Accident">
                7. Cause of accident or dangerous occurrence:
              </label>
              <input
                type="text"
                id="Cause-Of-Accident"
                value={causeOfAccident}
                onChange={(ev) => setCauseOfAccident(ev.target.value)}
              />
            </div>
            <hr />
            <div id="Question-Eight" className="Question">
              <label htmlFor="Accident">8. Accident:</label>
              <input
                type="text"
                id="Accident"
                value={accident}
                onChange={(ev) => setAccident(ev.target.value)}
              />
              <label htmlFor="If-Machinery">
                (a) If caused by machinery, state:
              </label>
              <input
                type="checkbox"
                id="If-Machinary"
                checked={causedByMachinery}
                onChange={(ev) => handleCheckBox(ev)}
              />
              <br />
              {causedByMachinery && (
                <div id="Only-If-Caused-By-Machines">
                  <div className="Section">
                    <label htmlFor="Machine-Part">
                      (i) Name of machine and part causing the accident.
                    </label>
                    <input
                      type="text"
                      id="Machine-Part"
                      value={machineAndPart}
                      onChange={(ev) => setMachineAndPart(ev.target.value)}
                    />
                  </div>
                  <div className="Section">
                    <label htmlFor="If-Mechanical-Power">
                      (ii) if moved by mechanical power at the time
                    </label>
                    <input
                      type="checkbox"
                      id="If-Mechanical-Power"
                      value={movedByMechPower}
                      onChange={(ev) => ifMovedByMechPower(ev)}
                    />
                  </div>
                </div>
              )}
              <label htmlFor="Activity">
                (b) State exactly what the injured person was doing?:
              </label>
              <input
                type="text"
                value={activity}
                onChange={(ev) => setActivity(ev.target.value)}
              />
            </div>
            <hr />
            <div id="Question-Nine" className="Question">
              <label htmlFor="Dangerous-Occurence">
                9. Dangerous occurrence
              </label>
              <input
                type="text"
                id="Dangerous-Occurence"
                value={dangerousOccurrence}
                onChange={(ev) => setDangerousOccurrence(ev.target.value)}
              />
              <label htmlFor="CF-Lifting-Appliance">
                (a) Nature of collapse or failure of lifting appliance.
              </label>
              <input
                type="text"
                id="CF-Lifting-Appliance"
                value={collapseFailureLiftingAppliance}
                onChange={(ev) =>
                  setCollapseFailureLiftingAppliance(ev.target.value)
                }
              />
              <label htmlFor="Rope-Chain-Breakage-Nature">
                (b) Nature of the breakage of rope, chain or other appliances
              </label>
              <input
                type="text"
                value={ropeChainBreakageNature}
                id="Rope-Chain-Breakage-Nature"
                onChange={(ev) => setRopeChainBreakageNature(ev.target.value)}
              />
              <label htmlFor="CF-Means-Of-Access">
                (c) Name of collapse or failure of means of access to or from a
                ship
              </label>
              <input
                type="text"
                id="CF-Means-Of-Access"
                value={collapseFailureMeansOfAccess}
                onChange={(ev) =>
                  setCollapseFailureLiftingAppliance(ev.target.value)
                }
              />
              <label htmlFor="Any-Other-Dangerous-Occurence">
                (d) Nature of any other dangerous occurrence as counted under
                Regulation 90 other than 9 (a), 9 (b) and 9 (c) above.
              </label>
              <input
                type="text"
                value={anyOtherDangerousOccurrence}
                id="Any-Other-Dangerous-Occurence"
                onChange={(ev) =>
                  setAnyOtherDangerousOccurrence(ev.target.value)
                }
              />
            </div>
            <PDFDownloadLink
              document={
                <MyDocument
                  employerName={employerName}
                  employerAddress={employerAddress}
                  placeOfOccurrence={placeOfOccurrence}
                  date={date}
                  shift={shift}
                  hour={hour}
                  injuredPersonDetails={injuredPersonDetails}
                  injuredPersonSex={injuredPersonSex}
                  injuredPersonAge={injuredPersonAge}
                  yearOccupation={yearOccupation}
                  yearOfExp={yearOfExp}
                  natureAndExtent={natureAndExtent}
                  treatmentProvider={treatmentProvider}
                  disabilityDuration={disabilityDuration}
                  cargoTypeName={cargoTypeName}
                  startHour={startHour}
                  causeOfAccident={causeOfAccident}
                  causedByMachinery={causedByMachinery}
                  machineAndPart={machineAndPart}
                  movedByMechPower={movedByMechPower}
                  activity={activity}
                  accident={accident}
                  dangerousOccurrence={dangerousOccurrence}
                  collapseFailureLiftingAppliance={
                    collapseFailureLiftingAppliance
                  }
                  ropeChainBreakageNature={ropeChainBreakageNature}
                  collapseFailureMeansOfAccess={collapseFailureMeansOfAccess}
                  anyOtherDangerousOccurrence={anyOtherDangerousOccurrence}
                ></MyDocument>
              }
              fileName="somename.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download now!"
              }
            </PDFDownloadLink>
          </div>
        </div>

        <MyDocument
          employerName={employerName}
          employerAddress={employerAddress}
          placeOfOccurrence={placeOfOccurrence}
          date={date}
          shift={shift}
          hour={hour}
          injuredPersonDetails={injuredPersonDetails}
          injuredPersonSex={injuredPersonSex}
          injuredPersonAge={injuredPersonAge}
          yearOccupation={yearOccupation}
          yearOfExp={yearOfExp}
          natureAndExtent={natureAndExtent}
          treatmentProvider={treatmentProvider}
          disabilityDuration={disabilityDuration}
          cargoTypeName={cargoTypeName}
          startHour={startHour}
          causeOfAccident={causeOfAccident}
          causedByMachinery={causedByMachinery}
          machineAndPart={machineAndPart}
          movedByMechPower={movedByMechPower}
          activity={activity}
          accident={accident}
          dangerousOccurrence={dangerousOccurrence}
          collapseFailureLiftingAppliance={collapseFailureLiftingAppliance}
          ropeChainBreakageNature={ropeChainBreakageNature}
          collapseFailureMeansOfAccess={collapseFailureMeansOfAccess}
          anyOtherDangerousOccurrence={anyOtherDangerousOccurrence}
        />
      </div>
    </>
  );
}

const MyDocument = ({
  employerName,
  employerAddress,
  placeOfOccurrence,
  date,
  shift,
  hour,
  injuredPersonDetails,
  injuredPersonSex,
  injuredPersonAge,
  yearOccupation,
  yearOfExp,
  natureAndExtent,
  treatmentProvider,
  disabilityDuration,
  cargoTypeName,
  startHour,
  causeOfAccident,
  causedByMachinery,
  machineAndPart,
  movedByMechPower,
  activity,
  dangerousOccurrence,
  collapseFailureLiftingAppliance,
  ropeChainBreakageNature,
  collapseFailureMeansOfAccess,
  anyOtherDangerousOccurrence,
  accident,
}) => (
  <Document style={{ backgroundColor: "white" }}>
    <Page size="A2" orientation="portrait" style={{ margin: "1rem" }}>
      
      <View
        style={{
          color: "black",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text>FORM XII</Text>
        <Text>To be sent to the Inspector, Dock Safety</Text>
        <Text>
          Address: Near CE /MPA Maintenance Office, Mormugao, Headland Sada,
          Goa- 403804.
        </Text>
        <Text>REPORT OF ACCIDENT OF DANGEROUS OCCURRENCE</Text>
        <Text>
          [Required by Regulation 91 of the Dock Workers (Safety, Health and
          Welfare) Regulations, 1989 in pursuance of Sec. 22 of the Dock Workers
          (Safety, Health and Welfare) Act, 1986]
        </Text>
      </View>
      <View
        style={{
          color: "black",
          margin: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "start",
        }}
      >
        <Text> 1.Name of the Employer: {employerName} </Text>
        <Text> 2.Address of the Employer: {employerAddress} </Text>
        <Text>
          3.Ship or other exact place where accident or dangerous occurrence
          happened: {placeOfOccurrence}
        </Text>
        <Text>
          4.Date, Shift and hour of accident or dangerous occurrence: Date:
          {date} Shift: {shift} Hour:{hour}
        </Text>
        <Text>
          5. (i) Name and address of injured person: {injuredPersonDetails}
        </Text>
        <Text>
          Sex: {injuredPersonSex} Age: {injuredPersonAge} Year. Occupation:
          {yearOccupation} No. Experience in the trade:{yearOfExp}
        </Text>
        <Text>
          (ii) Nature and extent of injuries, (e.g. fatal, loss of finger,
          fracture of legs): {natureAndExtent}
        </Text>
        <Text>(iii) By whom treatment was given?:{treatmentProvider}</Text>
        <Text>
          (iv) Was the injured person disabled for more than forty-eight hours?:
          {disabilityDuration}
        </Text>
        <Text>(v) Type and name of cargo handled:{cargoTypeName}</Text>
        <Text>
          6. Hour at which the injured person started work: {startHour}
        </Text>
        <Text>
          7. Cause of accident or dangerous occurrence: {causeOfAccident}
        </Text>
        <Text>8. Accident: {accident}</Text>
        <Text>
          (a) If caused by machinery, state: {causedByMachinery ? "Yes" : "No"}
        </Text>
        <Text>
          (i) Name of machine and part causing the accident. {machineAndPart}
        </Text>
        <Text>
          (ii) if moved by mechanical power at the time
          {movedByMechPower ? "Yes" : "No"}
        </Text>
        <Text>
          (b) State exactly what the injured person was doing?:{activity}
        </Text>
        <Text>9. Dangerous occurrence: {dangerousOccurrence} </Text>
        <Text>
          (a) Nature of collapse or failure of lifting appliance.
          {collapseFailureLiftingAppliance}
        </Text>
        <Text>
          (b) Nature of the breakage of rope, chain or other appliances.
          {ropeChainBreakageNature}
        </Text>
        <Text>
          (c) Name of collapse or failure of means of access to or from a ship
          {collapseFailureMeansOfAccess}
        </Text>
        <Text>
          (d) Nature of any other dangerous occurrence as counted under
          Regulation 90 other than 9 (a), 9 (b) and 9 (c) above.
          {anyOtherDangerousOccurrence}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            margin: "1rem",
          }}
        >
          <Text>Date......</Text>
        </View>
        <View
          style={{
            margin: "1rem",
          }}
        >
          <Text>Signature......</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default App;
