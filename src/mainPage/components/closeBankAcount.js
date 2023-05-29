import swal from 'sweetalert';
import { useHistory } from "react-router-dom";

const CloseBankAcount = () => {

    const history = useHistory();

    const handleButtonClick = (e) => {
        // e.preventDefault();

        swal("Sended!", "Request", "success");
        history.push("/Main");
    }

    return ( 
        <div className="mainPageForm" style={{paddingTop:"130px"}}>
        <form>
            
            <input type="text" id="account-number" name="account-number" placeholder="Enter an account number to transfer deposits" required></input>
            <textarea id="issue" name="issue" placeholder="Please provide some reasons so we can help you"></textarea>
            <button id="report-button" type="submit" onClick={handleButtonClick}>Send Request</button>
        </form>
        </div>
     );
}
 
export default CloseBankAcount;