// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Community = () => {
//   return (
//     <div className="container-fluid py-4 bg-dark">
//       <div className="row">
//         {/* Left Sidebar - Community Members */}
//         <div className="col-lg-3 mb-4">
//           <div className="bg-white p-3 rounded shadow-sm mb-4">
//             <h5 className="fw-bold">Community Members</h5>
//             <ul className="list-unstyled mt-3">
//               {[...Array(6)].map((_, i) => (
//                 <li key={i} className="d-flex align-items-center mb-3">
//                   <img
//                     src={`https://i.pravatar.cc/40?img=${i + 10}`}
//                     alt="user"
//                     className="rounded-circle me-2"
//                   />
//                   <div className="w-100">
//                     <div className="bg-secondary rounded w-75 mb-1" style={{ height: '8px' }} />
//                     <div className="bg-secondary rounded w-50" style={{ height: '8px' }} />
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <div className="text-center mt-2 ">
//               <a href="#" className="text-primary fw-bold">Create or Join Group</a>
//             </div>
//           </div>

//           <div className="bg-white p-3 rounded shadow-sm">
//             <p className="mb-2">Have any questions or queries?</p>
//             <button className="btn btn-primary btn-sm">Contact Us</button>
//           </div>
//         </div>

//         {/* Center Content - Posts */}
//         <div className="col-lg-6 mb-4">
//           {/* Post Creator */}
//           <div className="bg-white p-3 rounded shadow-sm mb-4">
//             <h6>Create or Share your posts</h6>
//             <input
//               type="text"
//               placeholder="Type Something..."
//               className="form-control my-3"
//             />
//             <div className="d-flex justify-content-between align-items-center">
//               <div>
//                 <button className="btn btn-light me-2">
//                   <i className="fas fa-image"></i> Images
//                 </button>
//                 <button className="btn btn-light">
//                   <i className="fas fa-video"></i> Videos
//                 </button>
//               </div>
//               <button className="btn btn-primary">Publish</button>
//             </div>
//           </div>

//           {/* Posts */}
//           {[1, 2].map((_, i) => (
//             <div key={i} className="bg-white p-3 rounded shadow-sm mb-4">
//               <div className="d-flex align-items-center mb-2">
//                 <img
//                   src="https://i.pravatar.cc/40?img=23"
//                   alt="avatar"
//                   className="rounded-circle me-2"
//                 />
//                 <div>
//                   <h6 className="mb-0">Ramesh</h6>
//                   <small className="text-muted">2 mins ago</small>
//                 </div>
//               </div>
//               <div className="bg-light p-3 rounded">
//                 Hi, there is a new construction work going on near area, there might be requirement of labours.
//               </div>
//               <div className="mt-2 text-muted d-flex gap-3">
//                 <span><i className="fas fa-heart text-danger"></i> 296 Likes</span>
//                 <span><i className="fas fa-comment"></i> 24 Comments</span>
//                 <span><i className="fas fa-share"></i> Share</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Sidebar - Jobs */}
//         <div className="col-lg-3">
//           <h5 className="fw-bold mb-3">Jobs</h5>

//           {/* Job Card 1 */}
//           <div className="position-relative mb-4">
//             <img
//               src="https://images.unsplash.com/photo-1581090700227-1e8a23f60c3b"
//               alt="construction"
//               className="img-fluid rounded shadow"
//               style={{ height: '200px', objectFit: 'cover' }}
//             />
//             <div className="position-absolute top-0 start-0 text-white p-3 d-flex flex-column justify-content-end h-100 w-100" style={{ background: 'rgba(0,0,0,0.4)' }}>
//               <h6 className="fw-bold">ABC Constructions</h6>
//               <p className="mb-1"><i className="fas fa-map-marker-alt"></i> Gujarat</p>
//               <p className="mb-1"><i className="fas fa-briefcase"></i> 4 Years</p>
//               <p className="mb-0">Need 60 labours for apartment construction</p>
//             </div>
//           </div>

//           {/* Job Card 2 */}
//           <div className="position-relative">
//             <img
//               src="https://images.unsplash.com/photo-1600853052363-3c51d9028ed6"
//               alt="scooter"
//               className="img-fluid rounded shadow"
//               style={{ height: '200px', objectFit: 'cover' }}
//             />
//             <div className="position-absolute bottom-0 start-0 text-white p-3 d-flex justify-content-between align-items-end w-100" style={{ background: 'rgba(0,0,0,0.5)' }}>
//               <div>
//                 <h6 className="mb-1">Bajaj Scooter</h6>
//                 <p className="mb-0">₹ 22,000</p>
//               </div>
//               <button className="btn btn-primary btn-sm">Call</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Community;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img from '../Community/c1.jpeg'
import img1 from '../Community/c2.jpeg'
const Community = () => {
  return (
    <div className="container-fluid bg-light py-4 ">
      <div className="row gx-4">
        {/* Left Sidebar - Community Members */}
        <div className="col-lg-3 mb-4 ">
            <h5 className="fw-bold text-center">Community Members</h5>
          <div className="bg-white p-3 rounded shadow-sm mb-4 border border-black">
            
            <ul className="list-unstyled mt-3">
              {[...Array(6)].map((_, i) => (
                <li key={i} className="d-flex align-items-center mb-3">
                  <img
                    src={`https://i.pravatar.cc/40?img=${i + 10}`}
                    alt="user"
                    className="rounded-circle me-2"
                  />
                  <div className="w-100">
                    <div className="bg-secondary rounded w-75 mb-1" style={{ height: '8px' }} />
                    <div className="bg-secondary rounded w-50" style={{ height: '8px' }} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center mt-2">
            <div className="bg-secondary rounded w-100 mb-1" style={{ height: '2px' }} />
              <a href="#" className="text-primary fw-bold text-decoration-none">Create or Join Group</a>
            </div>
          </div>

          <div className="bg-white p-3 rounded shadow-sm border border-black">
            <p className="mb-2">Have any questions or queries?</p>
            <button className="btn btn-primary btn-sm">Contact Us</button>
          </div>
        </div>

        {/* Center - Post Creator & Posts */}
        <div className="col-lg-5 mb-4">
          {/* Post Creator */}
          <div className="bg-white p-3 rounded shadow-sm mb-3 border border-black">
            <h6 className="fw-bold">Create or Share your posts</h6>
            <textarea
              placeholder="Type Something..."
              className="form-control my-3"
              rows={3}
            />
            <div className="d-flex justify-content-between align-items-center ">
              <div>
                <button className="btn btn-light me-2">
                  <i className="fas fa-image"></i> Images
                </button>
                <button className="btn btn-light">
                  <i className="fas fa-video"></i> Videos
                </button>
              </div>
              <button className="btn btn-primary">Publish</button>
            </div>
          </div>

          {/* Posts Feed */}
          {[1, 2].map((_, i) => (
            <div key={i} className="bg-blue p-40 rounded shadow-sm mb-6">
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://i.pravatar.cc/40?img=23"
                  alt="avatar"
                  className="rounded-circle me-2"
                />
                <div>
                  <h6 className="mb-0">Ramesh</h6>
                  <small className="text-muted">2 mins ago</small>
                </div>
              </div>
              <div className="bg-light p-3 rounded">
                Hi, there is a new construction work going on near area, there might be requirement of labours.
              </div>
              <div className="mt-2 text-muted d-flex gap-3">
                <span><i className="fas fa-heart text-danger"></i> 296 Likes</span>
                <span><i className="fas fa-comment"></i> 24 Comments</span>
                <span><i className="fas fa-share"></i> Share</span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-lg-3">
          <h5 className="fw-bold mb-10">Jobs</h5>

          {/* Job Card 1 */}
          <div className="position-relative mb-4 ">
            <img
              src={img}
              alt="construction"
              className="img-fluid rounded shadow "
              style={{ height: '300px',width: '100%', objectFit: 'cover' }}
            />
            <div className="position-absolute top-0 start-0 text-white p-3 d-flex flex-column justify-content-end h-100 w-100" style={{ background: 'rgba(0,0,0,0.4)' }}>
              <h6 className="fw-bold">ABC Constructions</h6>
              <p className="mb-1"><i className="fas fa-map-marker-alt"></i> Gujarat</p>
              <p className="mb-1"><i className="fas fa-briefcase"></i> 4 Years</p>
              <p className="mb-0">Need 60 labours for apartment construction</p>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="position-relative">
            <img
              src={img1}
              alt="scooter"
              className="img-fluid rounded shadow"
              style={{ height: '300px', width: '100%', objectFit: 'cover' }}
            />
            <div className="position-absolute bottom-0 start-0 text-white p-3 d-flex justify-content-between align-items-end w-100" style={{ background: 'rgba(0,0,0,0.5)' }}>
              <div>
                <h6 className="mb-1">Bajaj Scooter</h6>
                <p className="mb-0">₹ 22,000</p>
              </div>
              <button className="btn btn-primary btn-sm">Call</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Community;
