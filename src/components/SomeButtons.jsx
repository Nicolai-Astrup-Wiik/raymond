import React from 'react'
import styles from '../styles/SomeButtons.module.css'


export const SomeButtons = () => {
	return (
		<div className={styles.SomeButtonContainer}>

			<a href="https://open.spotify.com/artist/5cZuNZ55Z740PLeUqHs0Oy?si=epeks89SQOGmev7hNEmnmQ" target='_blank' rel='noopener noreferrer'>
				<button className={styles.SomeButton}>
					{/*<?xml version="1.0" encoding="UTF-8" standalone="no"?>
				<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->*/}
					<svg className={styles.icon} width="50px" height="50" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
						<title>Spotify-color</title>
						<desc>Created with Sketch.</desc>
						<defs>
						</defs>
						<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g id="Color-" transform="translate(-200.000000, -460.000000)" fill="#00DA5A">
								<path d="M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460" id="Spotify">

								</path>
							</g>
						</g>
					</svg>
				</button>
			</a>

			<a href="https://www.instagram.com/raymond_enoksen_composer/" target='_blank' rel='noopener noreferrer'>
				<button className={styles.SomeButton}>
					{/*<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->*/}
					<svg className={styles.icon} width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)" />
						<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)" />
						<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)" />
						<path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white" />
						<path fillRule="evenodd" clipRule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white" />
						<path fillRule="evenodd" clipRule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white" />
						<defs>
							<radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
								<stop stopColor="#B13589" />
								<stop offset="0.79309" stopColor="#C62F94" />
								<stop offset="1" stopColor="#8A3AC8" />
							</radialGradient>
							<radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
								<stop stopColor="#E0E8B7" />
								<stop offset="0.444662" stopColor="#FB8A2E" />
								<stop offset="0.71474" stopColor="#E2425C" />
								<stop offset="1" stopColor="#E2425C" stopOpacity="0" />
							</radialGradient>
							<radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
								<stop offset="0.156701" stopColor="#406ADC" />
								<stop offset="0.467799" stopColor="#6A45BE" />
								<stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
							</radialGradient>
						</defs>
					</svg>
				</button>
			</a>
			<a href="https://www.youtube.com/channel/UC-4TdZFdaU2uOYwkguwyjNQ" target='_blank' rel='noopener noreferrer'>
				<button className={styles.SomeButton}>
					{/*<?xml version="1.0" encoding="UTF-8" standalone="no"?>
				<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->*/}
					<svg className={styles.icon} width="50" height="50" viewBox="0 -7 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

						<title>Youtube-color</title>
						<desc>Created with Sketch.</desc>
						<defs>

						</defs>
						<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g id="Color-" transform="translate(-200.000000, -368.000000)" fill="#CE1312">
								<path d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z" id="Youtube">

								</path>
							</g>
						</g>
					</svg>
				</button>
			</a>
			<a href="https://www.linkedin.com/in/raymond-enoksen-bb29623/?originalSubdomain=no" target='_blank' rel='noopener noreferrer'>
				<button className={styles.SomeButton}>
					<svg className={styles.icon}
						xmlns="http://www.w3.org/2000/svg"
						width="50px"
						height="50px"
						viewBox="0 0 256 256"
						xmlSpace="preserve"
					>
						<defs />
						<g
							style={{
								stroke: 'none',
								strokeWidth: 0,
								strokeDasharray: 'none',
								strokeLinecap: 'butt',
								strokeLinejoin: 'miter',
								strokeMiterlimit: 10,
								fill: 'none',
								fillRule: 'nonzero',
								opacity: 1
							}}
							transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
						>
							<path
								d="M 0 6.447 C 0 2.887 2.978 0 6.651 0 h 76.698 C 87.022 0 90 2.887 90 6.447 v 77.106 C 90 87.114 87.022 90 83.349 90 H 6.651 C 2.978 90 0 87.114 0 83.553 V 6.447 z"
								style={{
									stroke: 'none',
									strokeWidth: 1,
									strokeDasharray: 'none',
									strokeLinecap: 'butt',
									strokeLinejoin: 'miter',
									strokeMiterlimit: 10,
									fill: 'rgb(0,102,153)',
									fillRule: 'nonzero',
									opacity: 1
								}}
								strokeLinecap="round"
							/>
							<path
								d="M 20.485 29.151 c 4.74 0 7.691 -3.121 7.691 -7.021 c -0.088 -3.988 -2.95 -7.022 -7.601 -7.022 c -4.65 0 -7.69 3.034 -7.69 7.022 c 0 3.9 2.95 7.021 7.512 7.021 H 20.485 L 20.485 29.151 z"
								style={{
									stroke: 'none',
									strokeWidth: 1,
									strokeDasharray: 'none',
									strokeLinecap: 'butt',
									strokeLinejoin: 'miter',
									strokeMiterlimit: 10,
									fill: 'rgb(255,255,255)',
									fillRule: 'nonzero',
									opacity: 1
								}}
								strokeLinecap="round"
							/>
							<path
								d="M 27.282 75.339 v -40.64 H 13.688 v 40.64 H 27.282 z"
								style={{
									stroke: 'none',
									strokeWidth: 1,
									strokeDasharray: 'none',
									strokeLinecap: 'butt',
									strokeLinejoin: 'miter',
									strokeMiterlimit: 10,
									fill: 'rgb(255,255,255)',
									fillRule: 'nonzero',
									opacity: 1
								}}
								strokeLinecap="round"
							/>
							<path
								d="M 34.804 75.339 h 13.594 V 52.644 c 0 -1.215 0.088 -2.428 0.447 -3.296 c 0.983 -2.427 3.219 -4.94 6.975 -4.94 c 4.919 0 6.887 3.727 6.887 9.19 v 21.741 h 13.592 V 52.037 c 0 -12.483 -6.706 -18.291 -15.65 -18.291 c -7.333 0 -10.553 4.073 -12.342 6.847 h 0.091 v -5.894 H 34.804 C 34.982 38.513 34.804 75.339 34.804 75.339 L 34.804 75.339 z"
								style={{
									stroke: 'none',
									strokeWidth: 1,
									strokeDasharray: 'none',
									strokeLinecap: 'butt',
									strokeLinejoin: 'miter',
									strokeMiterlimit: 10,
									fill: 'rgb(255,255,255)',
									fillRule: 'nonzero',
									opacity: 1
								}}
								strokeLinecap="round"
							/>
						</g>
					</svg>
				</button>
			</a>
			<a href="https://www.imdb.com/name/nm1780369/" target='_blank' rel='noopener noreferrer'>
				<button className={styles.SomeButton}>
					<svg className={styles.icon} height="50" version="1.1" viewBox="0 0 512 512" width="50px" xmlns="http://www.w3.org/2000/svg">
						<g id="_x31_71-imdb">
							<g>
								<g>
									<path d="M436.714,26.001H75.287c-27.21,0-49.285,22.075-49.285,49.286v361.427c0,27.211,22.075,49.285,49.285,49.285h361.427c27.211,0,49.284-22.074,49.284-49.285V75.287C485.998,48.076,463.925,26.001,436.714,26.001z" style={{ fill: '#FBBF14' }} />
								</g>
							</g>
							<rect height="131.222" style={{ fill: '#273238' }} width="33.883" x="91.716" y="190.287" />
							<path d="M241.831,321.509h-29.469v-88.714l-11.912,88.714H179.3l-12.528-86.763v86.763h-29.776V190.287h43.947c3.39,20.329,6.16,40.968,8.934,61.504l7.803-61.504h44.152V321.509z" style={{ fill: '#273238' }} />
							<path d="M330.544,236.8c0-8.317,0.31-17.25-1.438-25.055c-4.414-23.102-32.24-21.458-50.311-21.458h-25.261v131.222C341.942,321.612,330.544,327.669,330.544,236.8z M287.522,298.713v-85.94c12.219,0,10.576,6.47,10.576,16.428v50.622C298.099,289.781,300.049,299.022,287.522,298.713z" style={{ fill: '#273238' }} />
							<path d="M395.949,223.656c-9.137,0-15.298,2.773-21.457,9.447v-42.816h-32.55v131.222h30.597l1.953-8.317c5.852,6.982,12.218,10.063,21.457,10.063c20.331,0,22.795-15.607,22.795-31.729v-36.963C418.744,236.8,417.923,223.656,395.949,223.656z M379.522,304.362c-1.642,0-3.081-0.823-3.902-2.465c-2.26-5.237-1.128-45.281-1.128-45.897c0-3.901-1.132-13.04,5.03-13.04c7.496,0,6.364,7.496,6.364,13.04v33.574C385.887,295.12,387.53,304.362,379.522,304.362z" style={{ fill: '#273238' }} />
						</g>
					</svg>
				</button>
			</a>
			<a href="mailto:post@dreamscores.com" target='_blank' rel='noopener noreferrer'>
				<button className={styles.SomeButton}>
					<svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="50px" viewBox="0 0 512 512" xmlSpace="preserve">
						<path
							fill="#00c3ff"
							d="M475.919 448.43H36.081c-15.182 0-27.49-12.307-27.49-27.49V91.06c0-15.182 12.307-27.49 27.49-27.49H475.92c15.182 0 27.49 12.307 27.49 27.49v329.88c-.001 15.182-12.308 27.49-27.491 27.49z"
						/>
						<path
							fill="#00aaf0"
							d="M36.081 448.43H475.92c15.182 0 27.49-12.307 27.49-27.49V91.73L287.097 275.997c-17.921 15.266-44.273 15.266-62.194 0L8.591 91.73v329.21c0 15.182 12.307 27.49 27.49 27.49z"
						/>
						<path
							fill="#0096dc"
							d="M207.077 296.924A75.513 75.513 0 0 0 256 314.937a75.514 75.514 0 0 0 48.924-18.013l198.485-178.493V91.73L287.097 275.997A47.858 47.858 0 0 1 256 287.447a47.853 47.853 0 0 1-31.096-11.45L8.591 91.73v329.21c0 15.182 12.307 27.49 27.49 27.49H475.92c15.182 0 27.49-12.307 27.49-27.49v-9.163H146.04c-50.608 0-91.633-41.025-91.633-91.633v-140.87c0-4.885 5.722-7.528 9.441-4.359l143.229 122.009z"
						/>
						<path
							d="M475.919 54.98H36.081C16.186 54.98 0 71.166 0 91.06v329.88c0 19.895 16.186 36.081 36.081 36.081H475.92c19.895 0 36.081-16.186 36.081-36.081V91.06c-.001-19.894-16.187-36.08-36.082-36.08zM36.081 72.161H475.92c9.169 0 16.827 6.566 18.537 15.241L280.14 269.968c-13.988 11.916-34.291 11.916-48.279 0L17.543 87.402c1.71-8.675 9.368-15.241 18.538-15.241zm439.838 367.678H36.081c-9.169 0-16.827-6.566-18.537-15.241L179.1 286.975a8.59 8.59 0 0 0-11.141-13.079L17.181 402.337V109.663l203.538 173.385c10.222 8.707 22.751 13.06 35.281 13.06 12.53 0 25.059-4.354 35.281-13.06l203.538-173.385v292.674L344.04 273.896c-3.609-3.077-9.033-2.644-12.11.969a8.59 8.59 0 0 0 .969 12.11l161.557 137.623c-1.709 8.675-9.367 15.241-18.537 15.241z"
						/>
					</svg>
				</button>
			</a>



		</div>
	)
}
