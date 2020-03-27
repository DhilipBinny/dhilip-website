import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { CertificateListDialogComponent } from "../certificate-list-dialog/certificate-list-dialog.component";
import { CertificatelistsexpansionComponent } from "../certificatelistsexpansion/certificatelistsexpansion.component";

@Component({
  selector: "app-certificates",
  templateUrl: "./certificates.component.html",
  styleUrls: ["./certificates.component.css"]
})
export class CertificatesComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.entry.clear();
    this.showCourseComponent = true;
  }

  cards = {
    "Datacamp Career Tracks": {
      desc: "Data Scientist, Data Analyst, Python Programmer ",
      src: "assets/images/datacamp.png",
      courses: {
        "Python Programmer": {
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/track/f9283b20ef43df5ae6352869b8440895d52bc6f0",
          s_link: "https://www.datacamp.com/tracks/python-programmer"
        },
        "Data Analyst with Python": {
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/track/0a0a42cefe9cb048483584b8f69efc0d023fdcbc",
          s_link: "https://www.datacamp.com/tracks/data-analyst-with-python"
        },
        "Data Scientist with Python": {
          s_link: "https://www.datacamp.com/tracks/data-scientist-with-python",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/track/9ab44fbd78d27c6a01bf6ca99229df3a8cde16f6"
        }
      }
    },
    "Python For Everybody - Specialization": {
      desc: "Python For Everybody - Specialization",
      src: "assets/images/coursera1.png",
      courses: {
        "Python for Everybody": {
          c_link:
            "https://www.coursera.org/account/accomplishments/specialization/certificate/LWJCYK2U8YBR?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
          s_link: "https://www.coursera.org/specializations/python"
        },
        "Programming for Everybody (Getting Started with Python)": {
          c_link:
            "https://www.coursera.org/account/accomplishments/certificate/JKGCTTA2P86Z?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
          s_link: "https://www.coursera.org/learn/python?specialization=python"
        },
        "Python Data Structures": {
          c_link:
            "https://www.coursera.org/account/accomplishments/certificate/HFTSV3GJG92U?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
          s_link: "https://www.coursera.org/learn/python-data?specialization=python"
        },
        "Using Databases with Python": {
          c_link:
            "https://www.coursera.org/account/accomplishments/certificate/44PP672BFR7E?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
          s_link: "https://www.coursera.org/learn/python-databases?specialization=python"
        },
        "Using Python to Access Web Data": {
          c_link:
            "https://www.coursera.org/account/accomplishments/certificate/WL8K3L7UNR8M?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
          s_link: "https://www.coursera.org/learn/python-network-data?specialization=python"
        },
        "Capstone Retrieving, Processing, and Visualizing": {
          c_link:
            "https://www.coursera.org/account/accomplishments/certificate/6KQ8RZE9VFB9?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
          s_link: "https://www.coursera.org/learn/python-data-visualization"
        }
      }
    },
    "Data Scientist": {
      desc: "Python, sql, machine learning...",
      src: "assets/images/Data_Scientist1.png",
      courses: {
        "Analyzing Police Activity with pandas": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/60cad849bf034ebc18c649009ee5ab8bc973bef6"
        },
        "Cleaning Data in Python": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/074082809256b6ce80a15cfd4c00203f86c5e516"
        },
        "Conda Essentials": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/782b4546b1a52095cc7de6b2474f0fc92f841b1a"
        },
        "Deep Learning in Python": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/f78bb2a64c10d20ce710666f033249b0cfc6b696"
        },
        "Importing Data in Python (Part 1)": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/a08a0d5cf09a88eed2dbe079a8079fbc4fa291fb"
        },
        "Importing Data in Python (Part 2)": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/d23c23f4fbefb126c0aef88067e6a35966e9f578"
        },
        "Interactive Data Visualization with Bokeh": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/bb74a5eb53bfc89bde0640c42ad8157fdfb7317f"
        },
        "Intermediate Python for Data Science": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/b0fa62dbe04b2678249011b45f3932ee6172ce63"
        },
        "Intro to SQL for Data Science": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/214816b0162ccad7a81aa982b4e0582ead407620"
        },
        "Introduction to Data Visualization with Python": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/6db018eadf831784b37fe4df07d6a42b459042ee"
        },
        "Introduction to Python": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/4c8ac4e0f288e4a9e484f6ee638cb8ef830ed07e"
        },
        "Introduction to Relational Databases in SQL": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/0c74800c19575391ac6494aabc6fbb582e7808b3"
        },
        "Introduction to Shell for Data Science": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/7cac7dc0588fa167ba63a5cb264bc8e88e7ed6e9"
        },
        "Joining Data in SQL": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/cd4e1d0abd7606cedfc125696128fe289a7cc107"
        },
        "Machine Learning with the Experts School budgets": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/91d7b90621013ab3a6373230387686a310fbbabc"
        },
        "Machine Learning with Tree-Based Models in Python": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/6f21d2682ba7b86df45cd37eaed5631cab47b1b6"
        },
        "Manipulating DataFrames with pandas": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/a5c7d844cf01c30fec7a6b863d3113d467eb0155"
        },
        "Merging DataFrames with pandas": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/fb04795b97d59f2341988b7d5d03ed4f5db567a0"
        },
        "Network Analysis in Python (Part 1)": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/cfa0d20e81fbd270c0f8fb0219b38a5bb3e2d54e"
        },
        "Pandas Foundations": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/cd7dd12bb1c28ce6737baa00069aa8c1b42fa72c"
        },
        "Python Data Science Toolbox (Part 1)": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/4d5d41f3c5c450a19aa77d0c030bd47cbba86b7c"
        },
        "Python Data Science Toolbox (Part 2)": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/410462aef5189c5ba1067ba7e41166b15d0a6943"
        },
        "Statistical Thinking in Python (Part 1)": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/447e54ed89a55a090f4b59a67b7e78935229bc94"
        },
        "Statistical Thinking in Python (Part 2)": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/8c95faf5b3030ea714ac36b341c4cf6f248e0a8c"
        },
        "Supervised Learning with scikit-learn": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/878b0be66a45fd8a671641e78fd3acb629da8f90"
        },
        "Unsupervised Learning in Python": {
          s_link: "",
          c_link:
            "https://www.datacamp.com/statement-of-accomplishment/course/f943be82887a054fdc264ad6b25d0f2d17cf3f2b"
        }
      }
    }
  };

  // getcourses(card) {
  //   var courses = this.cards[card]["courses"]
  //   var img_src = this.cards[card]["src"]
  //   this.openDialog(courses, card,img_src)
  // }

  // openDialog(courses,card,img_src): void {
  //   const dialogRef = this.dialog.open(CertificateListDialogComponent, {
  //     width: '100%',
  //     maxWidth: '100vw !important',
  //     data: {courses:  courses, name:card, img_src:img_src}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
  showCourseComponent = true;
  loadcourses(card) {
    this.showCourseComponent = false;
    this.certificateListsExpansionContainer({
      courses: this.cards[card]["courses"],
      name: card,
      img_src: this.cards[card]["src"]
    });
    console.log("you clikced me..");
  }

  @ViewChild("certificateListsExpansionContainer", {
    static: true,
    read: ViewContainerRef
  })
  entry: ViewContainerRef;
  componentRef: any;
  certificateListsExpansionContainer(data) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(
      CertificatelistsexpansionComponent
    );
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.coursesData = data;
    this.componentRef.instance.hidechild.subscribe(hidechild => {
      console.log(hidechild);
      this.showCourseComponent = hidechild;
      this.entry.clear();
    });
  }
}
