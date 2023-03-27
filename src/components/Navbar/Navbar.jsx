import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark bucketCard_navbar">
                <Link class="navbar-brand ms-5 fw-5" to="/">CARDBUCKET</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto" style={{marginRight: "3%"}}>
                        <li class="nav-item">
                            <Link to="/" className="bucket_links">
                            <Button>
                                View Cards
                            </Button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/buckets" className="bucket_links">
                            <Button>
                                View Buckets
                            </Button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/history" className="bucket_links">
                            <Button>
                                View History
                            </Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar