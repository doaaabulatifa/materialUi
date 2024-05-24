import TitlebarImageList from "../components/TitlebarImageList";

// import TemporaryDrawer from '../componatns/TemporaryDrawer';
export default function About() {
    return (
      <div>
      <h4>Image list with title bars

This example demonstrates the use of the ImageListItemBar to add an overlay to each item. The overlay can accommodate a title, subtitle and secondary action - in this example an IconButton.</h4>
      {/* <TemporaryDrawer /> */}
      <h3>Response stopped
The Image List component in Material-UI allows you to display a collection of items, such as images, in a repeated pattern. It’s useful for creating galleries, product listings, or any scenario where you need to display multiple images.</h3>
      <TitlebarImageList />
    </div>
    
    );
  }
  