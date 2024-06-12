import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/FirebaseProvider";


const SingalCard = (assignments) => {
  const {_id, title, discription, marks, thumbnail, difficulty_level, due_date,buyer_email } =
    assignments.assignments || {};
 
    const {user} = useContext(AuthContext)
    const isBuyer = () => buyer_email === user?.email;

  return (
    
      <div className="mt-10 mr-2">
        <Card className="mt-6 w-full h-[500px]">
          <CardHeader className="relative h-56">
            <img className="h-[200px] w-full" src={thumbnail} />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-blue-900"
            >
              Marks: {marks}
            </Typography>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Difficulty Level: {difficulty_level}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 grid gap-2 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
           
            <Link to={'/myPostedAssignment'}>
            <Button disabled={!isBuyer()}>Update</Button>
            </Link>

            <Link to={'/myPostedAssignment'}>
            <Button disabled={!isBuyer()}>Delete</Button>
            </Link>

            <Link to={`/assignmentDetails/${_id}`}>
            <Button>View</Button>
            </Link>

          </CardFooter>
        </Card>
      </div>
   
  );
};

export default SingalCard;
