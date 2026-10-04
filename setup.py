from setuptools import find_packages, setup

with open("VERSION") as fd:
    VERSION = fd.read().rstrip()

requires = [
    "nextgisweb>=5.6.0.dev15",
]

entry_points = {
    "nextgisweb.packages": [
        "nextgisweb_community = nextgisweb:single_component",
    ],
}

setup(
    name="nextgisweb_community",
    version=VERSION,
    description="Community Edition extension for NextGIS Web",
    author="NextGIS",
    author_email="info@nextgis.com",
    packages=find_packages(exclude=["ez_setup", "examples", "tests"]),
    include_package_data=True,
    zip_safe=False,
    python_requires=">=3.12",
    install_requires=requires,
    entry_points=entry_points,
)
