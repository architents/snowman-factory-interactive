r = new THREE.WebGLRenderer({
1676:       canvas: introCanvas,
1677:       alpha: true,
1678:       antialias: true
1679:     });
1680:     renderer.setSize(window.innerWidth, window.innerHeight);
1681:     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
1682: 
1683:     const particleCount = 2600;
1684:     const geometry = new THREE.BufferGeometry();
1685:     const positions = new Float32Array(particleCount * 3);
1686: 
1687:     for (let i = 0; i < particleCount; i++) {
1688:       let x, y, z;
1689:       if (i < 1100) {
1690:         x = (Math.random() - 0.5) * 50;
1691:         z = (Math.random() - 0.5) * 50;
1692:         y = -8 + Math.sin(x * 0.25) * 1.5;
1693:       } else {
1694:         x = (Math.random() - 0.5) * 16;
1695:         y = -8 + Math.random() * 18;
1696:         z = (Math.random() - 0.5) * 16;
1697:       }
1698:       positions[i * 3] = x;
1699:       positions[i * 3 + 1] = y;
1700:       positions[i * 3 + 2] = z;
1701:     }
1702:     geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
1703: 
1704:     const particleMaterial = new THREE.PointsMaterial({
1705:       color: 0x3b82f6,
1706:       size: 0.16,
1707:       transparent: true,
1708:       opacity: 0.65
1709:     });
1710:     const pointCloud = new THREE.Points(geometry, particleMaterial);
1711:     scene.add(pointCloud);
1712: 
1713:     // Architectural Wireframe Box
1714:     const wireframeGeo = new THREE.WireframeGeometry(new THREE.BoxGeometry(16, 18, 16));
1715:     const wireframeMaterial = new THREE.LineBasicMaterial({
1716:       color: 0xbfdbfe,
1717:       transparent: true,
1718:       opacity: 0.5
1719:     });
1720:     const wireframeBox = new
<truncated 1477 bytes>
       if (introEyesGroup && introNoseGroup && introMouthGroup && introSnowmanAvatar) {
1751:         introEyesGroup.style.transform = `translate(${normX * 8}px, ${-normY * 6}px)`;
1752:         introNoseGroup.style.transform = `translate(${normX * 14}px, ${-normY * 9}px)`;
1753:         introMouthGroup.style.transform = `translate(${normX * 4}px, ${-normY * 3}px)`;
1754:         introSnowmanAvatar.style.transform = `perspective(600px) rotateY(${normX * 14}deg) rotateX(${-normY * 12}deg)`;
1755:       }
1756: 
1757:       // Sheet Cover Face Tracking
1758:       if (sheetEyesGroup && sheetNoseGroup && sheetMouthGroup && sheetSnowmanAvatar) {
1759:         sheetEyesGroup.style.transform = `translate(${normX * 8}px, ${-normY * 6}px)`;
1760:         sheetNoseGroup.style.transform = `translate(${normX * 14}px, ${-normY * 9}px)`;
1761:         sheetMouthGroup.style.transform = `translate(${normX * 4}px, ${-normY * 3}px)`;
1762:         sheetSnowmanAvatar.style.transform = `perspective(500px) rotateY(${normX * 10}deg) rotateX(${-normY * 8}deg)`;
1763:       }
1764:     });
1765: 
1766:     const clock = new THREE.Clock();
1767:     function animate() {
1768:       requestAnimationFrame(animate);
1769:       const elapsedTime = clock.getElapsedTime();
1770: 
1771:       camera.position.x += (targetCameraX - camera.position.x) * 0.05;
1772:       camera.position.y += (targetCameraY - camera.position.y) * 0.05;
1773:       camera.lookAt(0, 1, 0);
1774: 
1775:       pointCloud.rotation.y = elapsedTime * 0.035;
1776:       wireframeBox.rotation.y = elapsedTime * 0.035;
1777: 
1778:       renderer.render(scene, camera);
1779:     }
1780:     animate();
178