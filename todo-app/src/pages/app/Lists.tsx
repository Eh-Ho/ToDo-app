import ListCard from "../../components/UI/ListCard";

const Lists = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="m-10">
        <h2 className="text-3xl font-bold tracking-tight">
          <span className="text-content">Your Lists</span>
          <span className="text-primary"></span>
        </h2>
        <div className="flex items-center gap-2 mt-1 text-tertiary">
          <span className="w-1 h-1 rounded-full bg-tertiary/40" />
          <span>Organize your tasks into lists and categories</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2">
        <ListCard></ListCard>
        <ListCard></ListCard>
        <ListCard></ListCard>
        <ListCard></ListCard>
        <ListCard></ListCard>
      </div>
    </div>
  );
};

export default Lists;
