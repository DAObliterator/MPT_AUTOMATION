import { useState, useEffect } from "react";
import "./Home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  BlobProvider,
} from "@react-pdf/renderer";
import axios from "axios";
import { useAuth } from "../Contexts/AuthContext";
import Sidebar from "../components/Sidebar";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [height, setHeight] = useState("");
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
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [blob_ , setBlob_ ] = useState(null);
  const {
    isLoggedIn,
    setIsLoggedIn,
    userDetails,
    setUserDetails,
    isAdmin,
    setIsAdmin,
  } = useAuth();

  const handleCheckBox = (ev) => {
    setCausedByMachinary(!causedByMachinery);
  };

  const ifMovedByMechPower = (ev) => {
    setMovedByMechPower(!movedByMechPower);
  };

  useEffect(() => {
    const updateHeight = () => {
      setHeight(document.documentElement.scrollHeight);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const checkIfFieldsEmpty = (ev) => {
    console.log("function triggered");
    ev.preventDefault();

    //check if all fields are filled

    if (
      employerName.length > 0 &&
      employerAddress.length > 0 &&
      placeOfOccurrence.length > 0 &&
      date.length > 0 &&
      hour.length > 0 &&
      shift.length > 0 &&
      injuredPersonDetails.length > 0 &&
      injuredPersonSex.length > 0 &&
      setInjuredPersonAge.length > 0 &&
      yearOccupation.length > 0 &&
      yearOfExp.length > 0 &&
      natureAndExtent.length > 0 &&
      treatmentProvider.length > 0 &&
      disabilityDuration.length > 0 &&
      cargoTypeName.length > 0 &&
      causeOfAccident.length > 0 &&
      accident.length > 0 &&
      activity.length > 0 &&
      dangerousOccurrence.length > 0 &&
      collapseFailureLiftingAppliance.length > 0 &&
      ropeChainBreakageNature.length > 0 &&
      collapseFailureMeansOfAccess.length > 0 &&
      anyOtherDangerousOccurrence.length > 0
    ) {
      if (causedByMachinery === true && machineAndPart.length === 0) {
        alert("Specify details about machine and part involved");
      } else {
        alert("All Fields filled");
        setAllFieldsFilled(true);
      }
    } else {
      alert("Fields are Empty ❌❌❌ ");
    }
  };

  useEffect(() => {

    if (allFieldsFilled) {
      handleSendPDF();
    }

  },[allFieldsFilled])

  const handleSendPDF =  async () => {


    console.log("handleSendPDF called \n");

   
    const formData = new FormData();
    formData.append("file", blob_, "mypdf.pdf");

    try {
      await axios.post(
        import.meta.env.VITE_ENV === "development"
          ? import.meta.env.VITE_API_DEV + "/uploadPdf"
          : import.meta.env.VITE_API_PROD + "/uploadPdf",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true
        }
      ).then((response) => {
        alert(response.data.message)
      }).catch((error) => {
        alert(error);
      })
      
    } catch (error) {
      console.error("Error uploading file:", error);
    }


  }

  useEffect(() => {

    console.log(blob_ , " blob 0 ) \n")

  },[blob_])
 
  return (
    <>
      <div id="App-Main">
        <div>
          {!isLoggedIn && (
            <LoginSignUp
              isAuthenticated={isLoggedIn}
              height={height}
            ></LoginSignUp>
          )}
          {isLoggedIn && <Sidebar></Sidebar>}
          <div id="Form-Main">
            {isLoggedIn && <h1>Welcome {userDetails.username}</h1>}
            <h2>FORM XII</h2>

            <hr />
            <div id="Form-Responses">
              <div className="Section">
                <label htmlFor="Employer-Name">1.Name of the Employer</label>
                <input
                  type="text"
                  name="Employer-Name"
                  id="Employer-Name"
                  value={employerName}
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
                  value={employerAddress}
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
                  value={placeOfOccurrence}
                  onChange={(ev) => setPlaceOfOccurrence(ev.target.value)}
                />
              </div>
              <hr />
              <div id="Accident-Time-Details">
                <p>
                  4.Date, Shift and hour of accident or dangerous occurrence:
                </p>
                <div className="Section">
                  <label htmlFor="Date">Date</label>
                  <input
                    type="date"
                    id="Date"
                    onChange={(ev) => setDate(ev.target.value)}
                    value={date}
                  />
                </div>
                <div className="Section">
                  <label htmlFor="Shit">Shift </label>
                  <input
                    type="text"
                    id="Shift"
                    onChange={(ev) => setShift(ev.target.value)}
                    value={shift}
                  />
                </div>
                <div className="Section">
                  <label htmlFor="Hour">Hour</label>
                  <input
                    type="text"
                    id="Hour"
                    onChange={(ev) => setHour(ev.target.value)}
                    value={hour}
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
                  (ii) Nature and extent of injuries, (e.g. fatal, loss of
                  finger, fracture of legs):
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
                  (c) Name of collapse or failure of means of access to or from
                  a ship
                </label>
                <input
                  type="text"
                  id="CF-Means-Of-Access"
                  value={collapseFailureMeansOfAccess}
                  onChange={(ev) => setCollapseMeansOfAccess(ev.target.value)}
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
                <button
                  id="Submit-Btn"
                  onClick={(ev) => checkIfFieldsEmpty(ev)}
                  style={{ color: "white", backgroundColor: "red" }}
                >
                  Submit
                </button>
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
                style={{
                  backgroundColor: "red",
                  color: "yellow",
                  padding: "0.5rem",
                  borderRadius: "3rem",
                }}
              >
                {({ blob, url, loading, error }) =>

                  loading ? "Loading document..." : "Download now!"
                }
              </PDFDownloadLink>
              <BlobProvider
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
              >
                {({ blob, url, loading, error }) => {
                  // Do whatever you need with blob here
                 
                    setBlob_(blob);
                  
                  

                  
                }}
              </BlobProvider>
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
    <Page
      size="A2"
      orientation="portrait"
      style={{ margin: "1rem", color: "black", backgroundColor: "white" }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            color: "black",
            backgroundColor: "white",
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
            Welfare) Regulations, 1989 in pursuance of Sec. 22 of the Dock
            Workers (Safety, Health and Welfare) Act, 1986]
          </Text>
        </View>
        <View
          style={{
            color: "black",
            backgroundColor: "white",
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
            (iv) Was the injured person disabled for more than forty-eight
            hours?:
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
            (a) If caused by machinery, state:{" "}
            {causedByMachinery ? "Yes" : "No"}
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
      </View>
    </Page>
  </Document>
);

export const LoginSignUp = ({ isAuthenticated, height }) => {
  const [signUp, setSignUp] = useState(true);
  const [message, setMessage] = useState("Already A User SignIn");
  const [jC, setJC] = useState("flex-start");

  const handleFormChange = (ev) => {
    ev.preventDefault();
    setSignUp(!signUp);
    setJC((prevJC) => {
      return prevJC === "flex-start" ? "flex-end" : "flex-start";
    });
    setMessage(signUp ? "Create An Account!" : "Already A User? Sign In");
  };

  useEffect(() => {
    console.log(jC, "-jC\n");
  }, [jC]);

  return (
    <div
      id="Auth-Super-Div"
      style={{ minHeight: height }}
      className="Auth-Super"
    >
      <h1>Sign Up/Login To Continue</h1>
      <div id="Auth-Main" style={{ justifyContent: jC }}>
        {signUp ? (
          <RegisterComponent></RegisterComponent>
        ) : (
          <LoginComponent></LoginComponent>
        )}
        <div id="Message-Div">
          {" "}
          <button onClick={(ev) => handleFormChange(ev)}>
            {" "}
            {message}{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export const LoginComponent = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    userDetails,
    setUserDetails,
    isAdmin,
    setIsAdmin,
  } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    axios
      .post(
        import.meta.env.VITE_ENV === "development"
          ? import.meta.env.VITE_API_DEV + "/login"
          : import.meta.env.VITE_API_PROD + "/login",
        { username, password },
        { withCredentials: true }
      )
      .then((response) => {
        //store this in sessionStorage or a gloabl context

        console.log(JSON.stringify(response.data), " Authenticated User ");

        setUserDetails(response.data.user);
        setIsLoggedIn(true);

        if ( response.data.isAdmin === true ) {
          setIsAdmin(true);
        }

        window.sessionStorage.setItem("user", response.data.user.username);
        window.sessionStorage.setItem("email", response.data.user.email);
      })
      .catch((error) => {
        console.log(
          error,
          "error happened while accessing the login post route..."
        );
      });
  };

  return (
    <div id="Main-Login">
      <form
        action=""
        id="Login-Form"
        className="Auth-Form"
        onSubmit={(ev) => handleSubmit(ev)}
      >
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username..."
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          name="Password"
          id="Password"
          placeholder="Password..."
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export const RegisterComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    axios
      .post(
        import.meta.env.VITE_ENV === "development"
          ? import.meta.env.VITE_API_DEV + "/register"
          : import.meta.env.VITE_API_PROD + "/register",
        { username, password, email },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.status === 200) {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(
          error,
          "error happened while accessing the register post route..."
        );

        alert(error.response.data.message);
      });
  };

  return (
    <div id="Main-Register">
      <form
        action=""
        id="Register-Form"
        className="Auth-Form"
        onSubmit={(ev) => handleSubmit(ev)}
      >
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username..."
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          name="Password"
          id="Password"
          placeholder="Password..."
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="Email"
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
