import React from "react";
import PuppyCard from "../../components/PuppyCard/PuppyCard";
import { useLocation } from "react-router-dom";

export default function PuppyDetailPage(props) {
  // Refer to PuppyListItem to see how puppy is being passed via the <Link>
  // using the useLocation hook from react-router dom, to grab the
  // state, desctructering the puppy variable attached to state
  const {
    state: { puppy },
  } = useLocation();

  return (
    <>
      <h1>Puppy Details</h1>
      <PuppyCard key={puppy._id} puppy={puppy} />
    </>
  );
}
