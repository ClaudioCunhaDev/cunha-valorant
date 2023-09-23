import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ImgAgentCard({
  displayName,
  description,
  displayIcon,
  agentId,
}) {
  return (
    <div>
      <Card
        sx={{ maxWidth: 345, minHeight: 580, maxHeight: 600 }}
        className="border-2 border-slate-500"
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={`${displayIcon}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {displayName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="flex justify-center w-full">
            <Link
              to={`/agents/${agentId}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              LEARN MORE
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
