import TitlebarImageList from "../components/TitlebarImageList";

// import TemporaryDrawer from '../componatns/TemporaryDrawer';
export default function About() {
    return (
      <div>
      <h4>Image list with title bars

This example demonstrates the use of the ImageListItemBar to add an overlay to each item. The overlay can accommodate a title, subtitle and secondary action - in this example an IconButton.</h4>
      {/* <TemporaryDrawer /> */}
      <TitlebarImageList />
    </div>
    
    );
  }
  