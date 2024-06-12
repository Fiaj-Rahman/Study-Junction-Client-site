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
  
  const SingleBanner = (assignments) => {

    const {user} = useContext(AuthContext)

    const {_id, title, discription,buyer_email, marks, thumbnail, difficulty_level, due_date } =
      assignments.assignments || {};
  const isBuyer = () => buyer_email === user?.email ;
  
    return (
      
        <div className="mt-5 mr-2">
          <Card className="mt-6 w-full h-[500px]">
            <CardHeader  className="relative h-56">
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
              <Button disabled={!isBuyer()}>Update</Button>
              <Button disabled={!isBuyer()}>Delete</Button>
              <Link to={`/assignmentDetails/${_id}`}>
              <Button>View</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
     
    );
  };
  
  export default SingleBanner;
  